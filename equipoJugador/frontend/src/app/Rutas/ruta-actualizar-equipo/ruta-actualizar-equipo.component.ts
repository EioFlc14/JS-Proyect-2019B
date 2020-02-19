import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Equal} from "tslint/lib/utils";
import {EquipoService} from "../../Services/rest/equipo.service";
import {MessageService} from "primeng";

@Component({
  selector: 'app-ruta-actualizar-equipo',
  templateUrl: './ruta-actualizar-equipo.component.html',
  styleUrls: ['./ruta-actualizar-equipo.component.scss']
})
export class RutaActualizarEquipoComponent implements OnInit {

  equipo = {
    "nombre": '',
    "estadio": '',
  };

  idEquipo;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _equipoService: EquipoService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    const parametrosPapa$ = this._activatedRoute.params;

    parametrosPapa$
      .subscribe(
        (parametros: {idEquipo: number})=>{
          this.idEquipo = parametros.idEquipo;
          const equipo$ = this._equipoService.buscar(parametros.idEquipo);

          equipo$
            .subscribe(
              (equipoEncontrado: any[])=>{
                console.log('Equipo encontrado:', equipoEncontrado);
                this.equipo.nombre = equipoEncontrado[0].nombre;
                this.equipo.estadio = equipoEncontrado[0].estadio;

              },
              ()=>{
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener equipo'});
              }
            );

        }
      );

  }

  actualizarEquipo(){

    const nuevoEquipo$ = this._equipoService.actualizar(this.idEquipo, this.equipo);

    nuevoEquipo$
      .subscribe(
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Equipo Actualizado'});
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al actualizar'});
        }

      );

  }

}
