import {Component, OnInit} from '@angular/core';
import {UserRestService} from "../../services/rest/user-rest.service";
import {MessageService} from "primeng";
import {MedicalHistoryRestService} from "../../services/rest/medicalHistory.service";

@Component({
  selector: 'app-ruta-add-patient',
  templateUrl: './ruta-add-patient.component.html',
  styleUrls: ['./ruta-add-patient.component.scss']
})
export class RutaAddPatientComponent implements OnInit {

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
    "users": '',
    "record": '',
  };


  constructor(private readonly _patientService: UserRestService,
              private readonly  _medicalHistory: MedicalHistoryRestService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }


  addPatient() {
    this.patient.userUsername = this.patient.userIdentificator + this.patient.roles;
    this.patient.userPassword = 'abc123';

    const patient$ = this._patientService.create(this.patient);

    patient$
      .subscribe(
        (patient: any) => {

          console.log('patient:', patient.id);
          this.medicalHistory.users = patient.id;
          const medicalHistory$ = this._medicalHistory.create(this.medicalHistory);

          medicalHistory$
            .subscribe(
              () => {
                this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Patient Created'});
              },
              () => {
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Failed Action'});
              });

        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Failed Action'});
        }
      );

  }

}
