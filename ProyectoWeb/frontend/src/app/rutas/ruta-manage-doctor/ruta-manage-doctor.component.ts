import {Component, OnInit} from '@angular/core';
import {ROWSNUMBER} from "../../constants/constants";
import {MessageService} from "primeng";
import {UserSpecialtyRestService} from "../../services/rest/user_specialty.service";


@Component({
  selector: 'app-ruta-manage-doctor',
  templateUrl: './ruta-manage-doctor.component.html',
  styleUrls: ['./ruta-manage-doctor.component.scss']
})
export class RutaManageDoctorComponent implements OnInit {

  ROWS = ROWSNUMBER;
  doctors = [];

  filteredId = '';
  filteredNames = '';
  filteredLastnames = '';
  filteredSpecialty = '';


  constructor(private readonly _doctorsService: UserSpecialtyRestService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    const doctors$ = this._doctorsService.getAllDoctorsSpecialty();

    doctors$
      .subscribe(
        (docs: any[])=>{
          this.doctors = docs;
          //console.log('doctors', this.doctors);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Error getting doctors'});
        }

      );

}

  filteredDoctors() {
    return this.doctors.filter(
      (doctor) => {
        return doctor.user_specialties.id.toString().toLowerCase().includes(this.filteredId.toLowerCase());
      }
    ).filter(
      (doctor) => {
        return doctor.user_specialties.userName.toLowerCase().includes(this.filteredNames.toLowerCase());
      }
    ).filter(
      (doctor) => {
        return doctor.user_specialties.userLastname.toLowerCase().includes(this.filteredLastnames.toLowerCase());
      }
    ).filter(
      (doctor) => {
        return doctor.specialty_users.specialty.toLowerCase().includes(this.filteredSpecialty.toLowerCase());
      }
    );
  }


  delete(doctor) {

  }

}
