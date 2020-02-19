import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../Constantes/constants";
import {EquipoService} from "../../Services/rest/equipo.service";
import {MessageService} from "primeng";
import {CabeceraCarritoService} from "../../Services/rest/cabeceraCarrito.service";

@Component({
  selector: 'app-ruta-gestionar-carrito',
  templateUrl: './ruta-gestionar-carrito.component.html',
  styleUrls: ['./ruta-gestionar-carrito.component.scss']
})
export class RutaGestionarCarritoComponent implements OnInit {

  FILAS = ROWSNUMBER;

  carritos = [];
  filteredNumero='';
  filteredTotal='';
  filteredEstado='';

  constructor(
    private readonly _cabCarrito: CabeceraCarritoService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {

    const carritos$ = this._cabCarrito.getAll();

    carritos$
      .subscribe(
        (carr : any[])=>{
          this.carritos = carr;
          console.log('Carritos:', this.carritos);
        },
        ()=>{
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener los carritos'});
        }
      );

  }

  carritosFiltrados(){
    return this.carritos.filter(
      (carrito) => {
        return carrito.id.toString().includes(this.filteredNumero.toLowerCase());
      }
    ).filter(
      (carrito) => {
        return carrito.total.toString().includes(this.filteredTotal.toLowerCase());
      }
    ).filter(
      (carrito) => {
        return carrito.estado.toLowerCase().includes(this.filteredEstado.toLowerCase());
      }
    );

   }

   eliminar(id){

      const eliminado$ = this._cabCarrito.eliminar(id);

      eliminado$
        .subscribe(
          ()=>{
            this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Cabecera de Carrito Eliminado'});
          },
          ()=> {
            this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al eliminar cabecera de carrito'});
          }
        );


   }

}
