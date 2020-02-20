import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../Constantes/constants";
import {JugadorService} from "../../Services/rest/jugador.service";
import {MessageService} from "primeng";

@Component({
  selector: 'app-ruta-gestionar-jugador',
  templateUrl: './ruta-gestionar-jugador.component.html',
  styleUrls: ['./ruta-gestionar-jugador.component.scss']
})
export class RutaGestionarJugadorComponent implements OnInit {

  ROWS = ROWSNUMBER;
  jugadores = [];

  filteredNumero = '';
  filteredNombre = '';
  filteredNacionalidad = '';
  filteredEquipo = '';

  constructor(
    private readonly _jugadorService: JugadorService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {

    const jugadores$ = this._jugadorService.getAll();

    jugadores$
      .subscribe(
        (jg : any[])=>{
          for (let i = 0; i < jg.length; i++) {
            if(jg[i].equipo != null){
              this.jugadores.push(jg[i]);
            }
          }

          console.log('Jugadores:', this.jugadores);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener jugadores'});
        }
      );

  }

  jugadoresFiltrados(){
    return this.jugadores.filter(
      (jugador) => {
        return jugador.id.toString().includes(this.filteredNumero.toLowerCase());
      }
    ).filter(
      (jugador) => {
        return jugador.nombre.toLowerCase().includes(this.filteredNombre.toLowerCase());
      }
    ).filter(
      (jugador) => {
        return jugador.nacionalidad.toLowerCase().includes(this.filteredNacionalidad.toLowerCase());
      }
    ).filter(
      (jugador) => {
        return jugador.equipo.nombre.toString().toLowerCase().includes(this.filteredEquipo.toLowerCase());
      }
    );

  }

  eliminar(id){
    const eliminarJugador$ = this._jugadorService.eliminar(id);

    eliminarJugador$
      .subscribe(
        ()=>{

          const indice = this.jugadores.findIndex(
            (jug) => {
              return jug.id === id;
            }
          );

          this.jugadores.splice(indice, 1);
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Jugador Eliminado'});

        },
        ()=> {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al eliminar jugador'});
        }
      );
  }

}
