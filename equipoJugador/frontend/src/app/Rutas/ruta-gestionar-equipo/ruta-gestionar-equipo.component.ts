import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../Constantes/constants";
import {EquipoService} from "../../Services/rest/equipo.service";
import {MessageService} from "primeng";

@Component({
  selector: 'app-ruta-gestionar-equipo',
  templateUrl: './ruta-gestionar-equipo.component.html',
  styleUrls: ['./ruta-gestionar-equipo.component.scss']
})
export class RutaGestionarEquipoComponent implements OnInit {

  ROWS = ROWSNUMBER;
  equipos = [];

  filteredNumero = '';
  filteredNombre = '';
  filteredEstadio = '';

  constructor(
    private readonly _equiposService: EquipoService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {

    const equipos$ = this._equiposService.getAll();

    equipos$
      .subscribe(
        (eq : any[])=>{
          this.equipos = eq;
          console.log('Equipos:', this.equipos);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener equipos'});
        }
      );

  }

  equiposFiltrados(){
    return this.equipos.filter(
      (equipo) => {
        return equipo.id.toString().toLowerCase().includes(this.filteredNumero.toLowerCase());
      }
    ).filter(
      (equipo) => {
        return equipo.nombre.toLowerCase().includes(this.filteredNombre.toLowerCase());
      }
    ).filter(
      (equipo) => {
        return equipo.estadio.toLowerCase().includes(this.filteredEstadio.toLowerCase());
      }
    );

  }

  eliminar(id){

    const eliminarEquipo$ = this._equiposService.eliminar(id);

    eliminarEquipo$
      .subscribe(
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Equipo Eliminado'});
        },
        ()=> {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al eliminar equipo'});
        }
      );

  }

}
