import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth/auth.services";
import {MenuItem} from "primeng";

@Component({
  selector: 'app-ruta-principal',
  templateUrl: './ruta-principal.component.html',
  styleUrls: ['./ruta-principal.component.scss']
})
export class RutaPrincipalComponent implements OnInit {

  items: MenuItem[];

  nombres: string;
  identificator: number;
  role: string;

  constructor(private readonly _authService: AuthService) { }

  ngOnInit() {

    if(this._authService.estaLogeado === true ){
      console.log(this._authService.dataSesion);
      this.nombres = this._authService.dataSesion.nombre + ' ' + this._authService.dataSesion.apellido;
      this.identificator = this._authService.dataSesion.id;
      this.role = this._authService.dataSesion.rol;
    }

    this.items = [
      {
        label: 'Equipo', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Crear Equipo', routerLink: ['addEquipo']},{label: 'Gestionar Equipo',routerLink: ['gestionarEquipo']}]
            }
          ]
        ]
      },
      {
        label: 'Jugador', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Crear Jugador', routerLink: ['addJugador']},{label: 'Gestionar Jugador', routerLink: ['gestionarJugador']}]
            }
          ]
        ]
      },
      {
        label: 'Carrito', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Crear Carrito', routerLink: ['addCarrito']},{label: 'Gestionar Carrito', routerLink: ['gestionarCarrito']}]
            }
          ]
        ]
      },
      {
        label: 'Usuario', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              items: [{label: 'Crear Usuario', routerLink: ['addUsuario']},{label: 'Gestionar Usuarios', routerLink: ['gestionarUsuario']}]
            }
          ]
        ]
      }

    ];


  }

}
