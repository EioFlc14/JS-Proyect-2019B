import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserSpecialtyRestService} from "../../services/rest/user_specialty.service";
import {MessageService} from "primeng";
import {SpecialtyService} from "../../services/rest/specialty.service";
import {UserRestService} from "../../services/rest/user-rest.service";
import {MedicalHistoryRestService} from "../../services/rest/medicalHistory.service";

@Component({
  selector: 'app-ruta-update-patient',
  templateUrl: './ruta-update-patient.component.html',
  styleUrls: ['./ruta-update-patient.component.scss']
})
export class RutaUpdatePatientComponent implements OnInit {

  idPatient: number;
  idMedicalHistory: number;

  patient = {
    "userIdentificator": '',
    "userUsername": '',
    "userPassword": '',
    "userName": '',
    "userLastname": '',
    "userBirthdate": '',
    "userPhone": '',
    "userEmail": '',
    "roles": 3,
  };

  medicalHistory = {
    "record": '',
  };

  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _userSpecialtyService: UserSpecialtyRestService,
              private messageService: MessageService,
              private readonly _medicalHistoryService: MedicalHistoryRestService,
              private readonly  _userService: UserRestService) {
  }

  ngOnInit(): void {
    const parametrosPapa$ = this._activatedRoute.params;

    //console.log('paremtros papa', parametrosPapa$);
    parametrosPapa$
      .subscribe(
        (parametros: { idPatient: number }) => {
          this.idPatient = parametros.idPatient;
          const patient$ = this._medicalHistoryService.search(this.idPatient);

          patient$
            .subscribe(
              (patientFound) => {
                //console.log('patientF:', patientFound);
                this.patient.userIdentificator = patientFound[0].users.userIdentificator;
                this.patient.userName = patientFound[0].users.userName;
                this.patient.userLastname = patientFound[0].users.userLastname;
                // @ts-ignore
                this.patient.userBirthdate = new Date(patientFound[0].users.userBirthdate);
                this.patient.userPhone = patientFound[0].users.userPhone;
                this.patient.userEmail = patientFound[0].users.userEmail;
                this.medicalHistory.record = patientFound[0].record;
                this.idMedicalHistory = patientFound[0].id;

              },
              () => {
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error getting patient'});
              }
            );

        }
      );
  }

  updateButton() {

    const newPatient = {
      "userPhone": this.patient.userPhone,
      "userEmail": this.patient.userEmail,
    };

    const newMedicalHistory = {
      "record": this.medicalHistory.record,
    };

    const updatedPatient$ = this._userService.update(this.idPatient, newPatient);

    updatedPatient$
      .subscribe(
        (patients: any) => {
          const updatedMedicalHistory$ = this._medicalHistoryService.update(this.idMedicalHistory, newMedicalHistory);

          updatedMedicalHistory$
            .subscribe(
              () => {
                this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Patient Updated'});
              },
              () => {
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Failed Action'});
              }
            );
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Failed Action'});
        }
      )
  }
}

