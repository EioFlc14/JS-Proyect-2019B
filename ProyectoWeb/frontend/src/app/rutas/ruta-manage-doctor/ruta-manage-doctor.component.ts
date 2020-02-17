import {Component, OnInit} from '@angular/core';
import {ROWSNUMBER} from "../../constants/constants";
import {MessageService} from "primeng";
import {UserSpecialtyRestService} from "../../services/rest/user_specialty.service";
import {AuthService} from "../../services/auth/auth.service";
import {UserRestService} from "../../services/rest/user-rest.service";
import {UserRoleRestService} from "../../services/rest/user_role.service";
import {getSortHeaderNotContainedWithinSortError} from "@angular/material/sort/sort-errors";
import {MedicalCheckRestService} from "../../services/rest/medicalCheck-rest.service";


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
              private readonly _medicalCheck: MedicalCheckRestService,
              private readonly _doctorsRolService: UserRoleRestService,
              private readonly  _userService: UserRestService,
              private messageService: MessageService,
              public readonly _authService: AuthService) {
  }

  ngOnInit(): void {
    const doctors$ = this._doctorsService.getAllDoctorsSpecialty();

    doctors$
      .subscribe(
        (docs: any[]) => {
          this.doctors = docs;
          //console.log('doctors', this.doctors);
        },
        () => {
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

  delete(id) {
    console.log('id en delete:', id);

    const obtenerDoctor$ = this._doctorsRolService.search(id);

    obtenerDoctor$
      .subscribe(
        (doctorObtained) => {
          console.log('doctorObtained', doctorObtained);

          const eliminarDoctorRole$ = this._doctorsRolService.delete(doctorObtained[0].id);

          eliminarDoctorRole$
            .subscribe(
              (deletedDoctor: any[]) => {
                console.log(deletedDoctor);

                const obtenerSpecialty$ = this._doctorsService.searchDoctorsSpecialty(id);

                obtenerSpecialty$
                  .subscribe(
                    (specialtyObtained) => {

                      const eliminarDoctorSpecialty$ = this._doctorsService.delete(specialtyObtained[0].id);

                      eliminarDoctorSpecialty$
                        .subscribe(
                          (deletedDoctorSpecialty) => {

                            const obtenerMedicalCheck$ = this._medicalCheck.searchByDoctorEncharged(id);

                            obtenerMedicalCheck$
                              .subscribe(
                                (medicalCheckObtained) => {
                                  // @ts-ignore
                                  if (medicalCheckObtained.length > 0) {
                                    const eliminarMedicalCheck$ = this._medicalCheck.delete(medicalCheckObtained[0].id);

                                    eliminarMedicalCheck$
                                      .subscribe(
                                        () => {
                                        },
                                        () => {
                                          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error Deleting Doctor'});
                                        }
                                      );
                                  }

                                  const eliminarDoctor$ = this._userService.delete(id);

                                  eliminarDoctor$
                                    .subscribe(
                                      () => {
                                        this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Doctor Deleted'});

                                        const indice = this.doctors
                                          .findIndex(
                                            (doctorSearched) => {
                                              return doctorSearched.id === id;
                                            }
                                          );

                                        this.doctors.splice(indice, 1);

                                      },
                                      () => {
                                        this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error Deleting Doctor'});

                                      }
                                    );


                                },
                                () => {
                                  this.messageService.add({
                                    key: 'myKey1',
                                    severity: 'error',
                                    summary: 'Error Deleting Doctor'
                                  });
                                }
                              );

                          }
                        );

                    },
                    () => {
                      this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error Deleting Doctor'});
                    }
                  );

              },
              (error) => {
                console.error(error);
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error Deleting Doctor'});
              }
            );
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error Deleting Doctor'});
        }
      );


  }

}
