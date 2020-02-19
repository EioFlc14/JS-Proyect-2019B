import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JugadorService} from "../../Services/rest/jugador.service";
import {MessageService} from "primeng";
import {EquipoService} from "../../Services/rest/equipo.service";

interface Equipo {
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-ruta-actualizar-jugador',
  templateUrl: './ruta-actualizar-jugador.component.html',
  styleUrls: ['./ruta-actualizar-jugador.component.scss']
})
export class RutaActualizarJugadorComponent implements OnInit {

  equipo: Equipo;
  equipoDropDown: Equipo;

  jugador = {
    "nombre": '',
    "apellido": '',
    "edad": '',
    "nacionalidad": '',
    "precio": '',
  };

  idJugador;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _jugadorService: JugadorService,
    private _equiposService: EquipoService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {

    const equipos$ = this._equiposService.getAll();

    equipos$
      .subscribe(
        (equipos: Equipo) => {
          console.log('Equipo:', equipos);
          this.equipoDropDown = equipos;

          const parametrosPapa$ = this._activatedRoute.params;

          parametrosPapa$
            .subscribe(
              (parametros: { idJugador: number }) => {
                this.idJugador = parametros.idJugador;
                const jugador$ = this._jugadorService.buscar(parametros.idJugador);

                jugador$
                  .subscribe(
                    (jugadorEncontrado: any[]) => {
                      console.log('Equipo encontrado:', jugadorEncontrado);
                      this.jugador.nombre = jugadorEncontrado[0].nombre;
                      this.jugador.apellido = jugadorEncontrado[0].apellido;
                      this.jugador.edad = jugadorEncontrado[0].edad;
                      this.jugador.nacionalidad = jugadorEncontrado[0].nacionalidad;
                      this.jugador.precio = jugadorEncontrado[0].precio;
                      this.equipo = jugadorEncontrado[0].equipo.nombre;
                    },
                    () => {
                      this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al cargar jugador'});
                    }
                  );

              }
            );


        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al consultar los equipos'});

        }
      );


  }

  actualizarJugador() {

    let nuevoJugador = {
      "nacionalidad": this.jugador.nacionalidad,
      "precio": this.jugador.precio,
      "equipo": this.equipo.id,
    };

    console.log('nuevo jugador:', nuevoJugador);

    const jugadorNuevo$ = this._jugadorService.actualizar(this.idJugador, nuevoJugador);

    jugadorNuevo$
      .subscribe(
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Jugador Actualizado'});
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al actualizar'});
        }

      );

  }

}
