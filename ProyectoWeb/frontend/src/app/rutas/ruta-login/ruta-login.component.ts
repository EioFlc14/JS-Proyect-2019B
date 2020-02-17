import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {MessageService} from "primeng";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  username: '';
  password: '';

  constructor(private readonly  _authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  validate() {

    const respuestaLogin$ = this._authService.login(this.username, this.password);

    respuestaLogin$
      .subscribe(
        (data: any[]) => {
          if (data.length > 0) {
            this._authService.estaLogeado = true;
            this._authService.dataSesion = data[0];

            if (this._authService.dataSesion.roles[0].id == 1) { //administrador

              this._authService.addDoctor = true;
              this._authService.addMedicalCheck = true;
              this._authService.addPatient = true;
              this._authService.deleteDoctor = true;
              this._authService.deleteMedicalCheck = true;
              this._authService.deletePatient = true;
              this._authService.manageDoctor = true;
              this._authService.manageMedicalCheck = true;
              this._authService.managePatient = true;
              this._authService.updateDoctor = true;
              this._authService.updateMedicalCheck = true;
              this._authService.updatePatient = true;

            } else {
              if (this._authService.dataSesion.roles[0].id == 2) { //doctor

                this._authService.updateMedicalCheck = true;
                this._authService.manageMedicalCheck = true;

              } else {
                if (this._authService.dataSesion.roles[0].id == 3) {

                  this._authService.addPatient = true;
                  this._authService.managePatient = true;
                  this._authService.updatePatient = true;
                  this._authService.addMedicalCheck = true;

                }
              }
            }

            this.router.navigate(['login/principal']);
          } else {
            this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Unregistered User'});
          }
        },
        (error) => {
          console.log('Error:', error);
        }
      );


  }

}
