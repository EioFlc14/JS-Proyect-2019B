import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JugadorService} from "../../Services/rest/jugador.service";
import {EquipoService} from "../../Services/rest/equipo.service";
import {MessageService} from "primeng";
import {UsuarioService} from "../../Services/rest/usuario.service";

interface Rol {
  nombre: string;
}



@Component({
  selector: 'app-ruta-actualizar-usuario',
  templateUrl: './ruta-actualizar-usuario.component.html',
  styleUrls: ['./ruta-actualizar-usuario.component.scss']
})
export class RutaActualizarUsuarioComponent implements OnInit {

  usuario = {
    "nombre": '',
    "apellido": '',
    "username": '',
    "password": '',
  };

  idUsuario;
  roles: Rol[];
  selectedRol: Rol;

  constructor(    private readonly _activatedRoute: ActivatedRoute,
                  private readonly _usuarioService: UsuarioService,
                  private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.roles = [
      {nombre: 'Administrador'},
      {nombre: 'Usuario'}
    ];

    const parametrosPapa$ = this._activatedRoute.params;

    parametrosPapa$
      .subscribe(
        (parametros: { idUsuario: number }) => {
          this.idUsuario = parametros.idUsuario;
          const usuario$ = this._usuarioService.buscar(parametros.idUsuario);

          usuario$
            .subscribe(
              (usuarioEncontrado: any[]) => {
                console.log('Equipo encontrado:', usuarioEncontrado);
                this.usuario.nombre = usuarioEncontrado[0].nombre;
                this.usuario.apellido = usuarioEncontrado[0].apellido;
                this.usuario.username = usuarioEncontrado[0].username;
                this.usuario.password = usuarioEncontrado[0].password;
                this.selectedRol = usuarioEncontrado[0].rol;

              },
              () => {
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al cargar usuario'});
              }
            );

        }
      );


  }

  actualizarUsuario(){

    let nuevoUsuario = {
      "username": this.usuario.username,
      "password": this.usuario.password,
      "rol": this.selectedRol.nombre,
    }

    const usuarioNuevo$ = this._usuarioService.actualizar(this.idUsuario, nuevoUsuario);

    usuarioNuevo$
      .subscribe(
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Usuario Actualizado'});
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al actualizar'});
        }
      );

  }


}
