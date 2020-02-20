import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../Constantes/constants";
import {JugadorService} from "../../Services/rest/jugador.service";
import {MessageService} from "primeng";
import {UsuarioService} from "../../Services/rest/usuario.service";

@Component({
  selector: 'app-ruta-gestionar-usuario',
  templateUrl: './ruta-gestionar-usuario.component.html',
  styleUrls: ['./ruta-gestionar-usuario.component.scss']
})
export class RutaGestionarUsuarioComponent implements OnInit {

  ROWS = ROWSNUMBER;
  usuarios = [];

  filteredUsername = '';
  filteredNombre = '';
  filteredRol = '';


  constructor(    private readonly _usuarioService: UsuarioService,
                  private messageService: MessageService,) { }

  ngOnInit(): void {

    const usuarios$ = this._usuarioService.getAll();

    usuarios$
      .subscribe(
        (usu : any[])=>{
          this.usuarios = usu;
          console.log('Usuarios:', this.usuarios);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener usuarios'});
        }
      );

  }



  usuariosFiltrados(){
    return this.usuarios.filter(
      (usuario) => {
        return usuario.nombre.toString().includes(this.filteredNombre.toLowerCase());
      }
    ).filter(
      (usuario) => {
        return usuario.username.toString().toLowerCase().includes(this.filteredUsername.toLowerCase());
      }
    ).filter(
      (usuario) => {
        return usuario.rol.toString().toLowerCase().includes(this.filteredRol.toLowerCase());
      }
    );

  }

  eliminar(id){

    const eliminarUsuario$ = this._usuarioService.eliminar(id);

    eliminarUsuario$
      .subscribe(
        ()=>{

          const indice = this.usuarios.findIndex(
            (us) => {
              return us.id === id;
            }
          );

          this.usuarios.splice(indice, 1);
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Usuario Eliminado'});

        },
        ()=> {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al eliminar Usuario'});
        }
      );

  }


}
