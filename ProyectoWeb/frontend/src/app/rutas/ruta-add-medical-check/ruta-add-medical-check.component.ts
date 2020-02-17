import {Component, OnInit} from '@angular/core';
import {UserRoleRestService} from "../../services/rest/user_role.service";
import {MessageService} from "primeng";
import {MedicalCheckRestService} from "../../services/rest/medicalCheck-rest.service";
import {MedicalHistoryRestService} from "../../services/rest/medicalHistory.service";
import {ArduinoService} from "../../services/rest/arduino.service";


@Component({
  selector: 'app-ruta-add-medical-check',
  templateUrl: './ruta-add-medical-check.component.html',
  styleUrls: ['./ruta-add-medical-check.component.scss']
})
export class RutaAddMedicalCheckComponent implements OnInit {

  medicalCheck = {
    patientMedicalHistory: '',
    doctorEncharged: '',
    admitDate: '',
    dischargeDate: '',
    bloodPresure: null,
    weight: null,
    diagnosis: '',
  };

  resultTotalPatients: string[] = [];
  resultTotalDoctors: string[] = [];

  resultsPatientsMH: string[] = [];
  resultsD: string[] = [];

  constructor(private readonly _userService: UserRoleRestService,
              private readonly _arduinoService: ArduinoService,
              private messageService: MessageService,
              private readonly  _medicalCheckService: MedicalCheckRestService,
              private readonly _medicalHistory: MedicalHistoryRestService) {
  }

  ngOnInit(): void {

  }

  filterPatientsMedicalHistoriesHTTP(event) {
    let query = event.query;
    let patientsMH: any[] = [];
    const resultPatientsMH$ = this._medicalHistory.getAllMedicalHistories();

    resultPatientsMH$
      .subscribe(
        (patientsPreliminares: any[]) => {
          console.log('patientsMH:', patientsPreliminares);
          for (let i = 0; i < patientsPreliminares.length; i++) {
            if(patientsPreliminares[i].users != null){
              patientsMH.push(patientsPreliminares[i]);
            }
          }

          this.resultsPatientsMH = this.filterPatientMedicalHistory(query, patientsMH);
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error getting Patients Medical Histories'});
        }
      );
  }

  filterPatientMedicalHistory(query, patients: any[]): any[] {
    let filtered: any[] = [];
    let patient: any[] = [];
    for (let i = 0; i < patients.length; i++) {
      patient = patients[i].id;
      //console.log('id', patients[i].user_roles.id);
      this.resultTotalPatients.push(patients[i].id);
      if (patient.toString().includes(query)) {
        filtered.push(patient);
      }
    }
    return filtered;
  }

  filterDoctorsHTTP(event) {
    let query = event.query;
    const resultDoctors$ = this._userService.getAllDoctors();

    resultDoctors$
      .subscribe(
        (doctors: any[]) => {
          this.resultsD = this.filterDoctor(query, doctors);
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error getting doctors'});
        }
      );
  }

  filterDoctor(query, doctors: any[]): any[] {
    let filtered: any[] = [];
    let doctor: any[] = [];
    for (let i = 0; i < doctors.length; i++) {
      doctor = doctors[i].user_roles.id;
      this.resultTotalDoctors.push(doctors[i].user_roles.id);
      if (doctor.toString().includes(query)) {
        filtered.push(doctor);
      }
    }
    return filtered;
  }

  takeBloodPressure() {

    const pulsos$ = this._arduinoService.getBloodPressure();

    pulsos$
      .subscribe(
        (bloods)=>{
          //bloods tiene todos los json con el valor del pulso, es un arreglo y toca trabajar con un arreglo
          //se debe extraer el json.valor y sumar todos esos con un reduce
          //y luego ese valor se lo divide para 5 y eso le seteo en la pantalla
        }
      );

    //this.bloodPressure = 30; //llamar a la funcion del arduino
  }

  addMedicalCheck() {

    if (this.resultTotalPatients.toString().includes(this.medicalCheck.patientMedicalHistory.toString())) {
      if (this.resultTotalDoctors.toString().includes(this.medicalCheck.doctorEncharged.toString())) {
        const medicalCheck$ = this._medicalCheckService.create(this.medicalCheck);

        medicalCheck$
          .subscribe(
            (medicalCheck: any) => {
              this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Medical Check Created'});
              // var start = new Date().getTime();
              // while (new Date().getTime() < start + 3000);
              // this.router.navigate(['login/principal']);

            },
            (error) => {
              this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Failed Action'});
            }
          )
      } else {
        this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Unregistered Doctor'});
      }
    } else {
      this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Unregistered Patient'});
    }
    // console.log(this.resultTotalPatients);
    // console.log(this.resultTotalDoctors);

  }


}
