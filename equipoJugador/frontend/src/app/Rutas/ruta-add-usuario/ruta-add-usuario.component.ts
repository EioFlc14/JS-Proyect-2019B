import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../Services/rest/usuario.service";
import {MessageService} from "primeng";

interface Rol {
  nombre: string;
}


@Component({
  selector: 'app-ruta-add-usuario',
  templateUrl: './ruta-add-usuario.component.html',
  styleUrls: ['./ruta-add-usuario.component.scss']
})
export class RutaAddUsuarioComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    username: '',
    password: '',
  };

  roles: Rol[];
  selectedRol: Rol;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly messageService: MessageService,

  ) {

    this.roles = [
      {nombre: 'Administrador'},
      {nombre: 'Usuario'}
    ];

  }

  ngOnInit(): void {
  }

  crear(){
    this.usuario["rol"] = this.selectedRol.nombre;
    console.log('usuario a crear:', this.usuario);

    const usuario$ = this._usuarioService.crear(this.usuario);

    usuario$
      .subscribe(
        (user)=>{
          console.log('Usuario creado:', user);
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Usuario Creado'});
        },
        (error) => {
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al Crear Usuario'});
        }
      );

  }

}
