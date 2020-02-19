import { Component, OnInit } from '@angular/core';
import {ROWSNUMBER} from "../../Constantes/constants";
import {ActivatedRoute} from "@angular/router";
import {MessageService} from "primeng";
import {CabeceraCarritoService} from "../../Services/rest/cabeceraCarrito.service";
import {DetalleCarritoService} from "../../Services/rest/detalleCarrito.service";

@Component({
  selector: 'app-ruta-actualizar-carrito',
  templateUrl: './ruta-actualizar-carrito.component.html',
  styleUrls: ['./ruta-actualizar-carrito.component.scss']
})
export class RutaActualizarCarritoComponent implements OnInit {

  ROWS = ROWSNUMBER;

  cabCarrito = {
    "fecha": '',
    "direccion": '',
    "total": 0,
    "estado": '',
    "usuario": 0,
  };

  idCabCarrito;
  detCarritoTotal: any [] = [];
  totalAcomprar = 0;
  originales: any[] = [];
  jugadoresAeliminar: any[] = [];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private _cabCarrito: CabeceraCarritoService,
    private _detCarrito: DetalleCarritoService,

  ) { }

  ngOnInit(): void {
    const parametrosPapa$ = this._activatedRoute.params;

    parametrosPapa$
      .subscribe(
        (parametros: {idCarrito: number})=>{

          console.log('parametros:', parametros);
          this.idCabCarrito = parametros.idCarrito;
          const cabecera$ = this._cabCarrito.buscar(this.idCabCarrito);

          cabecera$
            .subscribe(
              (cabeceraCarritoEncontrada: any[])=>{
                console.log('Cabecera Carrito encontrado:', cabeceraCarritoEncontrada);
                // @ts-ignore
                this.cabCarrito.fecha = new Date(cabeceraCarritoEncontrada[0].fecha);
                this.cabCarrito.direccion = cabeceraCarritoEncontrada[0].direccion;
                this.cabCarrito.total = cabeceraCarritoEncontrada[0].total;
                this.cabCarrito.estado = cabeceraCarritoEncontrada[0].estado;
                this.cabCarrito.usuario = cabeceraCarritoEncontrada[0].usuario;

                this.totalAcomprar = cabeceraCarritoEncontrada[0].total;
                const jugadoresComprados$ = this._detCarrito.buscar(this.idCabCarrito);

                jugadoresComprados$
                  .subscribe(
                    (jugadoresEnDetalleCarrito: any[])=>{
                      this.detCarritoTotal = jugadoresEnDetalleCarrito;
                      console.log('detalle carrito:', this.detCarritoTotal);
                      this.originales = jugadoresEnDetalleCarrito;
                    },
                    ()=>{
                      this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener los jugadores comprados'});
                    }
                  );

              },
              ()=>{
                this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al obtener la cabecera'});
              }
            );

        }
      );


  }

  validarTotalaComprar() {
    return this.totalAcomprar <= 0;
  }

  actualizarCarrito(){

    for (let i = 0; i < this.jugadoresAeliminar.length; i++) {

      const eliminado$ = this._detCarrito.eliminar(this.jugadoresAeliminar[i].id);

      eliminado$
        .subscribe(
          () => {
          },
          () => {
            this.messageService.add({
              key: 'myKey1', severity: 'error', summary: `Error al eliminar ${this.jugadoresAeliminar[i].jugador.nombre} ${this.jugadoresAeliminar[i].jugador.apellido} `
            });
          }
        );

    }

    const totalActualizado = {
      total: this.totalAcomprar,
    };


    const actualizarTotalCabCarrito$ = this._cabCarrito.actualizar(this.idCabCarrito, totalActualizado);

    actualizarTotalCabCarrito$
      .subscribe(
        (carritoIndividual) => {
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Actualización registrada con éxito'});
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al actualizar la compra'});
        }
      );

  }

  listaDelCarrito() {
    return this.detCarritoTotal;
  }

  eliminarDeCarrito(id, subtotal) {

    console.log('id a eliminar;', id);

    const indice = this.detCarritoTotal.findIndex(
      (carrito) => {
        return carrito.jugador.id === id;
      }
    );

    this.jugadoresAeliminar.push(this.detCarritoTotal[indice]);
    this.detCarritoTotal.splice(indice, 1);
    this.totalAcomprar = this.totalAcomprar - subtotal;


    console.log('a eliminar:', this.jugadoresAeliminar);
    //console.log('se quedan:', this.detCarritoTotal);
    //console.log('originales:', this.originales);
  }


}
