import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from "../../services/rest/specialty.service";
import {UserRestService} from "../../services/rest/user-rest.service";
import {MessageService} from "primeng";
import {Router} from '@angular/router';

interface Specialty {
  users: [];
  id: number;
  specialty: string;
}

@Component({
  selector: 'app-ruta-add-doctor',
  templateUrl: './ruta-add-doctor.component.html',
  styleUrls: ['./ruta-add-doctor.component.scss']
})
export class RutaAddDoctorComponent implements OnInit {

  specialty: Specialty;
  specialtiesDropDown: Specialty;

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


  constructor(private readonly _specialtySerice: SpecialtyService,
              private readonly _doctorService: UserRestService,
              private messageService: MessageService,
              private router: Router
              ) { }

  ngOnInit() { //JALAR DE LA BASE TODAS LAS ESPECIALIDADES

    const specialties$ = this._specialtySerice.getAllSpecialties();

    specialties$
      .subscribe(
        (specialties: Specialty)=>{
          console.log('Specialites:', specialties);
          this.specialtiesDropDown = specialties;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error at consulting specialties',
          });
        }
      );

  }


  addDoctor() {
    this.doctor.userUsername = this.doctor.userIdentificator + '2';
    this.doctor.userPassword = 'abc123';
    this.doctor["specialties"] = this.specialty.id;

    const doctor$ = this._doctorService.create(this.doctor);

    doctor$
      .subscribe(
        (doc: any)=>{
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Doctor Created'});
          // var start = new Date().getTime();
          // while (new Date().getTime() < start + 3000);
          // this.router.navigate(['login/principal']);

        },
        (error)=>{
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Failed Action'});
        }
        )

  }

}
