import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng";
import {EquipoService} from "../../Services/rest/equipo.service";
import {JugadorService} from "../../Services/rest/jugador.service";

interface Equipo {
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-ruta-add-jugador',
  templateUrl: './ruta-add-jugador.component.html',
  styleUrls: ['./ruta-add-jugador.component.scss']
})
export class RutaAddJugadorComponent implements OnInit {

  equipo: Equipo;
  equipoDropDown: Equipo;

  jugador = {
    "nombre": '',
    "apellido": '',
    "edad": '',
    "nacionalidad": '',
    "precio": 0,
  };

  constructor(private messageService: MessageService,
              private _equiposService: EquipoService,
              private _jugadorService: JugadorService


              ) { }

  ngOnInit(): void {

    const equipos$ = this._equiposService.getAll();

    equipos$
      .subscribe(
        (equipos: Equipo)=>{
          console.log('Equipo:', equipos);
          this.equipoDropDown = equipos;
        },
        () => {
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al consultar los equipos'});

        }
      );
  }

  crearJugador(){

    this.jugador["equipo"] = this.equipo.id;

    const jugador$ = this._jugadorService.crear(this.jugador);

    jugador$
      .subscribe(
        (jugador: any)=>{
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Jugador Creado'});

        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al Crear Jugador'});
        }
      );

  }

  validarPrecio() {
    return this.jugador.precio <= 0;
  }
}
