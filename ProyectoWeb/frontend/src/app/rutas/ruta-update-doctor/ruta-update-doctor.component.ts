import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserSpecialtyRestService} from "../../services/rest/user_specialty.service";
import {MessageService} from "primeng";
import {SpecialtyService} from "../../services/rest/specialty.service";
import {UserRestService} from "../../services/rest/user-rest.service";

interface Specialty {
  id: number;
  specialty: string;
}

@Component({
  selector: 'app-ruta-update-doctor',
  templateUrl: './ruta-update-doctor.component.html',
  styleUrls: ['./ruta-update-doctor.component.scss']
})
export class RutaUpdateDoctorComponent implements OnInit {

  specialty: Specialty;

  idDoctor: number;

  doctor = {
    "userIdentificator": '',
    "userUsername": '',
    "userPassword": '',
    "userName": '',
    "userLastname": '',
    "userBirthdate": '',
    "userPhone": '',
    "userEmail": '',
    "roles": 2
  };

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _userSpecialtyService: UserSpecialtyRestService,
    private messageService: MessageService,
    private readonly _specialtySerice: SpecialtyService,
    private readonly  _userService: UserRestService
  ) {
  }

  ngOnInit(): void {
    const parametrosPapa$ = this._activatedRoute.params;

    //console.log('paremtros papa', parametrosPapa$);
    parametrosPapa$
      .subscribe(
        (parametros: { idDoctor: number }) => {
          this.idDoctor = parametros.idDoctor;
          const doctor$ = this._userSpecialtyService.searchDoctorsSpecialty(parametros.idDoctor);

          doctor$
            .subscribe(
              (doctorFound: any[]) => {
                console.log('doctor:', doctorFound);
                const specialties$ = this._specialtySerice.getAllSpecialties();

                specialties$
                  .subscribe(
                    (specialties: any[]) => {
                      this.doctor.userIdentificator = doctorFound[0].user_specialties.userIdentificator;
                      this.doctor.userName = doctorFound[0].user_specialties.userName;
                      this.doctor.userLastname = doctorFound[0].user_specialties.userLastname;
                      // @ts-ignore
                      this.doctor.userBirthdate = new Date(doctorFound[0].user_specialties.userBirthdate);

                      this.doctor.userPhone = doctorFound[0].user_specialties.userPhone;
                      this.doctor.userEmail = doctorFound[0].user_specialties.userEmail;
                      this.specialty = doctorFound[0].specialty_users;
                    },
                    () => {
                      this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error getting specialties'});
                    }
                  );
              },
              () => {
                this.messageService.add({
                  key: 'myKey1',
                  severity: 'error',
                  summary: 'Error getting doctor information'
                });
              }
            );
        }
      );
  }

  updateDoctor(){

     const newDoctor = {
       "userPhone": this.doctor.userPhone,
       "userEmail": this.doctor.userEmail
     };

    const newDoctor$ = this._userService.update(this.idDoctor,newDoctor);

    newDoctor$
      .subscribe(
        (doc: any)=>{
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Doctor Updated'});

        },
        (error)=>{
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Failed Action'});
        }
      )
  }


}
