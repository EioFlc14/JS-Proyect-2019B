import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../constants/constants";
import {UserRoleRestService} from "../../services/rest/user_role.service";
import {MessageService} from "primeng";
import {AuthService} from "../../services/auth/auth.service";
import {MedicalHistoryRestService} from "../../services/rest/medicalHistory.service";
import {UserRestService} from "../../services/rest/user-rest.service";

@Component({
  selector: 'app-ruta-manage-patient',
  templateUrl: './ruta-manage-patient.component.html',
  styleUrls: ['./ruta-manage-patient.component.scss']
})
export class RutaManagePatientComponent implements OnInit {
  ROWS = ROWSNUMBER;
  patients = [];

  filteredId = '';
  filteredNames = '';
  filteredLastnames = '';


  constructor(private readonly _patientService: UserRoleRestService,
              private readonly _userService: UserRestService,
              public readonly _authService: AuthService,
              private readonly _medicalHistory: MedicalHistoryRestService,
              private messageService: MessageService
            ) {
  }

  ngOnInit(): void {
    const patients$ = this._patientService.getAllPatients();

    patients$
      .subscribe(
        (patients: any[])=>{
          this.patients = patients;
          //console.log('patients', this.patients);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Error getting doctors'});
        }

      );
  }

  filteredPatients() {
    return this.patients.filter(
      (patient) => {
        return patient.user_roles.id.toString().includes(this.filteredId.toLowerCase());
      }
    ).filter(
      (patient) => {
        return patient.user_roles.userName.toLowerCase().includes(this.filteredNames.toLowerCase());
      }
    ).filter(
      (patient) => {
        return patient.user_roles.userLastname.toLowerCase().includes(this.filteredLastnames.toLowerCase());
      }
    );
  }

  delete(id) {
    const eliminarPatientRole$ = this._patientService.delete(id);

    eliminarPatientRole$
      .subscribe(
        (deletedPatient: any[])=> {
          console.log(deletedPatient);

          // @ts-ignore
          const obtenerIdMedicalHistory$ = this._medicalHistory.search(deletedPatient.id);

          obtenerIdMedicalHistory$
            .subscribe(
              (medicalHistory)=>{
                  const eliminarMedicalHistory$ =  this._medicalHistory.delete(medicalHistory[0].id);

                  eliminarMedicalHistory$
                    .subscribe(
                      ()=>{

                        const eliminarPatientUser$ = this._userService.delete(id);

                        eliminarPatientUser$
                          .subscribe(
                            ()=>{
                              const indice = this.patients
                                .findIndex(
                                  (patientSearched)=> {
                                    return patientSearched.id === id;
                                  }
                                );

                              this.patients.splice(indice, 1);
                              this.messageService.add({key: 'myKey1', severity:'success', summary: 'Patient Deleted'});
                            },
                            ()=>{
                              this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error Deleting Patient'});
                            }
                          );

                      },
                      ()=>{
                        this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error Deleting Patient'});
                      }
                    );


              },
              ()=>{
                this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error Deleting Patient'});
              }


            );


        },
        (error)=> {
          console.error(error);
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error Deleting Patient'});
        }

      );
  }
}
