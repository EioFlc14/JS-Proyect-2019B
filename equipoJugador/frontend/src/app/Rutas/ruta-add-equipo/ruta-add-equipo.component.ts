import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../../Services/rest/equipo.service";
import {MessageService} from "primeng";

@Component({
  selector: 'app-ruta-add-equipo',
  templateUrl: './ruta-add-equipo.component.html',
  styleUrls: ['./ruta-add-equipo.component.scss']
})
export class RutaAddEquipoComponent implements OnInit {

  equipo = {
    "nombre": '',
    "estadio": '',
  };


  constructor(private readonly _equipoService: EquipoService,
              private messageService : MessageService,
              ) { }

  ngOnInit(): void {
  }

  crearEquipo(){

    const equipo$ = this._equipoService.crear(this.equipo);

    equipo$
      .subscribe(
        (eq)=>{
          console.log('EQ:', eq);
          this.messageService.add({key: 'myKey1', severity:'success', summary: 'Equipo Creado'});
        },
        (error) => {
          this.messageService.add({key: 'myKey1', severity:'error', summary: 'Error al Crear Equipo'});
        }
      );

  }

}
