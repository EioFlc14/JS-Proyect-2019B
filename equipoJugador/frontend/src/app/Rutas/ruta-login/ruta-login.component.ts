import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {MessageService} from "primeng";
import {AuthService} from "../../Services/auth/auth.services";

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

            console.log('data sesion:', this._authService.dataSesion);

            if (this._authService.dataSesion.rol === "Administrador") {
              this._authService.esAdministrador = true;

            } else {
              if (this._authService.dataSesion.rol === "Usuario") {
                this._authService.esUsuario = true;
              }
            }

            this.router.navigate(['login/principal']);
          } else {
            this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Usuario No Registrado'});
          }
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error en la conexión'});
        }
      );


  }
}
