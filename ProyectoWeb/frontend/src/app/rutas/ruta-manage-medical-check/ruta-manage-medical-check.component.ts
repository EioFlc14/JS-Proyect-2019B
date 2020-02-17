import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../constants/constants";
import {MessageService} from "primeng";
import {MedicalCheckRestService} from "../../services/rest/medicalCheck-rest.service";
import {AuthService} from "../../services/auth/auth.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-ruta-manage-medical-check',
  templateUrl: './ruta-manage-medical-check.component.html',
  styleUrls: ['./ruta-manage-medical-check.component.scss']
})
export class RutaManageMedicalCheckComponent implements OnInit {

  ROWS = ROWSNUMBER;
  medicalChecks = [];

  filteredId = '';
  filteredPatient = '';
  filteredDoctor = '';
  filteredAdmitDate = '';


  constructor(private messageService: MessageService,
              private readonly _medicalCheck: MedicalCheckRestService,
              public readonly _authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    const medicalChecks$ = this._medicalCheck.getAllMedicalChecks();


    medicalChecks$
      .subscribe(
        (medicalChecks: any[])=>{
          this.medicalChecks = medicalChecks;
          console.log('medicalChecks', this.medicalChecks);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error getting doctors'});
        }

      );
  }

  filteredMedicalChecks() {

    return this.medicalChecks.filter(
      (medicalCheck) => {
        return medicalCheck.id.toString().includes(this.filteredId.toLowerCase());
      }
    ).filter(
      (medicalCheck) => {
        return medicalCheck.patientMedicalHistory.id.toString().includes(this.filteredPatient.toLowerCase());
      }
    ).filter(
      (medicalCheck) => {
        return medicalCheck.doctorEncharged.id.toString().includes(this.filteredDoctor.toLowerCase());
      }
    ).filter(
      (medicalCheck) => {
        return medicalCheck.admitDate.toString().includes(this.filteredAdmitDate.toLowerCase());
      }
    );
  }

  update(medicalCheck) {

  }

  delete(id) {
    const eliminar$ = this._medicalCheck.delete(id);

    eliminar$
      .subscribe(
        (deletedMedicalCheck)=> {
          console.log(deletedMedicalCheck);

          //indice se usa para eliminar un elemento en un array.
          const indice = this.medicalChecks
            .findIndex(
              (medicalCheckSearched)=> {
                return medicalCheckSearched.id === id;
              }
            );

          this.medicalChecks.splice(indice, 1);
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Medical Check Deleted'});

        },
        (error)=> {
          console.error(error);
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error Deleting Medical Check'});
        }

      );
  }


}
