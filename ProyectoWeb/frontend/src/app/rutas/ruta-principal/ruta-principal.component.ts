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
  images: any[];

  constructor(private readonly _authService: AuthService) { }

  ngOnInit(): void {

    this.images = [];
    this.images.push({source:'https://www.elcomercio.com/files/article_main/uploads/2018/06/11/5b1f06ad40f68.jpeg'});
    this.images.push({source:'https://clustersalud.americaeconomia.com/sites/clustersalud.americaeconomia.com/files/styles/article_main/public/hospital-ward-1338585_1920.jpg?itok=GZn3qQhG'});
    this.images.push({source:'https://www.makiber.com/wp-content/uploads/2017/06/hospital-manta-01-1070x600.jpg'});

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
