import { Component } from '@angular/core';
import {AuthService} from "./Services/auth/auth.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private authservice: AuthService
  ){

  }

  logout(){
    this.authservice.esAdministrador = false;
    this.authservice.esUsuario = false;
    this.authservice.estaLogeado = false;
    this.authservice.dataSesion = null;
  }


}
