import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserSpecialtyRestService} from "../../services/rest/user_specialty.service";
import {MessageService} from "primeng";
import {MedicalHistoryRestService} from "../../services/rest/medicalHistory.service";
import {UserRestService} from "../../services/rest/user-rest.service";
import {MedicalCheckRestService} from "../../services/rest/medicalCheck-rest.service";
import {ArduinoService} from "../../services/rest/arduino.service";

@Component({
  selector: 'app-ruta-update-medical-check',
  templateUrl: './ruta-update-medical-check.component.html',
  styleUrls: ['./ruta-update-medical-check.component.scss']
})
export class RutaUpdateMedicalCheckComponent implements OnInit {

  medicalCheck = {
    number: '',
    patientMedicalHistory: '',
    doctorEncharged: '',
    admitDate: '',
    dischargeDate: '',
    bloodPresure: null,
    weight: null,
    diagnosis: '',
  };

  idMedicalCheck: number;

  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _arduinoService: ArduinoService,
              private readonly _medicalCheck: MedicalCheckRestService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    const parametrosPapa$ = this._activatedRoute.params;

    //console.log('paremtros papa', parametrosPapa$);
    parametrosPapa$
      .subscribe(
        (parametros: { idMedicalCheck: number }) => {
          this.idMedicalCheck = parametros.idMedicalCheck;
          console.log('idmedicalcheck', this.idMedicalCheck);
          const medicalCheck$ = this._medicalCheck.search(this.idMedicalCheck);

          medicalCheck$
            .subscribe(
              (medicalCheckFound) => {
                console.log('medicalFound:', medicalCheckFound);
                this.medicalCheck.number = medicalCheckFound[0].id;
                this.medicalCheck.patientMedicalHistory = medicalCheckFound[0].patientMedicalHistory.id;
                this.medicalCheck.doctorEncharged = medicalCheckFound[0].doctorEncharged.id;
                // @ts-ignore
                this.medicalCheck.admitDate = new Date(medicalCheckFound[0].admitDate);
                if (medicalCheckFound[0].dischargeDate !== ""){
                  // @ts-ignore
                  this.medicalCheck.dischargeDate = new Date(medicalCheckFound[0].dischargeDate);
                }
                this.medicalCheck.bloodPresure = medicalCheckFound[0].bloodPresure;
                this.medicalCheck.weight = medicalCheckFound[0].weight;
                this.medicalCheck.diagnosis = medicalCheckFound[0].diagnosis;
                this.idMedicalCheck = medicalCheckFound[0].id;

              },
              () => {
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error getting patient'});
              }
            );

        }
      );
  }


  update(){

    const newMedicalCheck = {
      "dischargeDate": this.medicalCheck.dischargeDate,
      "bloodPresure": this.medicalCheck.bloodPresure,
      "weight": this.medicalCheck.weight,
      "diagnosis": this.medicalCheck.diagnosis,
    };

    const updatedMedicalCheck$ = this._medicalCheck.update(this.idMedicalCheck, newMedicalCheck);

    updatedMedicalCheck$
      .subscribe(
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Medical Check Updated'});
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Failed Action'});
        }
      );

  }

  takeBloodPressure() {

    const pulsos$ = this._arduinoService.getBloodPressure();

    pulsos$
      .subscribe(
        (bloods)=>{
          let total = 0;
          console.log('bloods:', bloods);
          // @ts-ignore
          for (let i = 0; i < bloods.length; i++) {
            total = total + bloods[i].valor;
          }
          total = total/5;
          this.medicalCheck.bloodPresure = Math.round(total);
        }
      );

  }

  validateWeight(){

    return this.medicalCheck.weight <= 0;
  }

}
