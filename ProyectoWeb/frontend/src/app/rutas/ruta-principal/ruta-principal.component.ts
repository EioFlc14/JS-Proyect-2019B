import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-ruta-principal',
  templateUrl: './ruta-principal.component.html',
  styleUrls: ['./ruta-principal.component.scss']
})
export class RutaPrincipalComponent implements OnInit {

  items: MenuItem[];

  nombres: string;
  identificator: string;
  role: string;

  constructor(private readonly _authService: AuthService) { }

  ngOnInit(): void {

    if(this._authService.estaLogeado === true ){
      console.log(this._authService.dataSesion);
        this.nombres = this._authService.dataSesion.userName + ' ' + this._authService.dataSesion.userLastname;
        this.identificator = this._authService.dataSesion.userIdentificator;
        this.role = this._authService.dataSesion.roles[0].role;
    }

    this.items = [
      {
        label: 'Doctor', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Add Doctor', routerLink: ['addDoctor']},{label: 'Manage Doctor',routerLink: ['manageDoctor']}]
            }
          ]
        ]
      },
      {
        label: 'Patient', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Add Patient', routerLink: ['addPatient']},{label: 'Manage Patient', routerLink: ['managePatient']}]
            }
          ]
        ]
      },
      {
        label: 'Medical Check', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Add Medical Check', routerLink: ['addMedicalCheck']},{label: 'Manage Medical Check', routerLink: ['manageMedicalCheck']}]
            }
          ]
        ]
      }

    ];

  }

}
