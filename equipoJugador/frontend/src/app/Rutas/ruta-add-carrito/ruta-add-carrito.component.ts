import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng";
import {CabeceraCarritoService} from "../../Services/rest/cabeceraCarrito.service";
import {AuthService} from "../../Services/auth/auth.services";
import {JugadorService} from "../../Services/rest/jugador.service";
import {ROWSNUMBER} from "../../Constantes/constants";
import {DetalleCarritoService} from "../../Services/rest/detalleCarrito.service";

interface Jugador {
  id: number,
  nombre: string,
  apellido: string,
  precio: number,
}

@Component({
  selector: 'app-ruta-add-carrito',
  templateUrl: './ruta-add-carrito.component.html',
  styleUrls: ['./ruta-add-carrito.component.scss']
})
export class RutaAddCarritoComponent implements OnInit {

  jugador: Jugador;
  jugadorDropDown: Jugador;
  ROWS = ROWSNUMBER;

  cabCarrito = {
    "fecha": '',
    "direccion": '',
    "total": 0,
    "estado": '',
    "usuario": 0,
  };

  idCabCarrito;

  totalAcomprar = 0;

  detCarritoTotal: any [] = [];

  detCarritoUnitario = {
    "jugador": 0,
    "cabCarrito": 0,
    "cantidad": null,
    "precio": 0,
    "subtotal": 0,
  };

  constructor(private messageService: MessageService,
              private readonly _jugadorServie: JugadorService,
              private readonly _cabCarritoService: CabeceraCarritoService,
              private readonly _authService: AuthService,
              private readonly _detCarritoService: DetalleCarritoService,
  ) {
  }

  ngOnInit(): void {

    document.getElementById('addAcarrito').style.display = "none";
    const jugadores$ = this._jugadorServie.getAll();

    jugadores$
      .subscribe(
        (jugadores: Jugador) => {

          this.jugadorDropDown = jugadores;
          console.log('jugadores en dropdown:', this.jugadorDropDown);
          // // @ts-ignore
          // for (let i = 0; i < jugadores.length; i++) {
          //   if(jugadores[i].equipo != null){
          //     // @ts-ignore
          //     this.jugadorDropDown.push(jugadores[i]);
          //   }
          // }

        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al consultar los jugadores'});

        }
      );

  }

  crearCarrito() {

    console.log('data sesion id:', this._authService.dataSesion.id);
    this.cabCarrito.usuario = this._authService.dataSesion.id;
    this.cabCarrito.estado = "creado";

    const carrito$ = this._cabCarritoService.crear(this.cabCarrito);

    carrito$
      .subscribe(
        (carrito) => {
          console.log('carrito:', carrito);
          this.idCabCarrito = carrito.id;

          document.getElementById('cabCarritoGeneral').style.display = "none";
          document.getElementById('addAcarrito').style.display = "block";

          // // @ts-ignore
          // document.getElementById('direccion').readOnly = true;
          // // @ts-ignore
          // document.getElementById('fechaDiv').disabled = "true";
          // document.getElementById('crearButton').innerHTML = "CREADO";
          // // @ts-ignore
          // document.getElementById('crearButton').disabled = "true";

          this.messageService.add({
            key: 'myKey1',
            severity: 'success',
            summary: 'Carrito Creado, Seleccione los productos a comprar'
          });
        },
        (error) => {
          this.cabCarrito.estado = "";
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al Crear el Carrito'});
        }
      );

  }

  validarTotalaComprar() {
    return this.totalAcomprar <= 0;
  }

  validarCantidad() {
    return this.detCarritoUnitario.cantidad <= 0;
  }

  validarSubtotal() {
    return this.detCarritoUnitario.subtotal <= 0;
  }

  setearPrecio() {
    this.detCarritoUnitario.precio = this.jugador.precio;

  }

  setearSubtotal() {
    this.detCarritoUnitario.subtotal = this.jugador.precio * this.detCarritoUnitario.cantidad;

  }

  addACarrito() {
    //console.log('jugador dropdown:', this.jugadorDropDown);
    const newUnitario = {
      "jugador": this.jugador.id,
      "cabCarrito": this.idCabCarrito,
      "cantidad": this.detCarritoUnitario.cantidad,
      "precio": this.detCarritoUnitario.precio,
      "subtotal": this.detCarritoUnitario.subtotal,
      "nombreCompleto": this.jugador.nombre + ' ' + this.jugador.apellido,
    };

    this.detCarritoTotal.push(newUnitario);
    //console.log('jugador seleccionado:', this.jugador);
    //console.log('lista de carrito:', this.detCarritoTotal);

    this.detCarritoUnitario.precio = 0;
    this.detCarritoUnitario.subtotal = 0;
    this.detCarritoUnitario.cantidad = 0;

    // // @ts-ignore
    // const indice = this.jugadorDropDown.findIndex(
    //     (carrito) => {
    //       return carrito.id === newUnitario.jugador;
    //     }
    //   );
    //
    // // @ts-ignore
    // this.jugadorDropDown.splice(indice, 1);
    //
    // console.log('jugador dropdown:', this.jugadorDropDown);

    this.totalAcomprar = this.totalAcomprar + newUnitario.subtotal;

  }

  eliminarDeCarrito(id, subtotal) {

    const indice = this.detCarritoTotal.findIndex(
      (carrito) => {
        return carrito.id === id;
      }
    );

    this.detCarritoTotal.splice(indice, 1);
    this.totalAcomprar = this.totalAcomprar - subtotal;

  }

  comprar() {

    let compraIndividual = {
      "jugador": 0,
      "cabeceraCarrito": 0,
      "cantidad": 0,
      "precio": 0,
      "subtotal": 0,
    };

    console.log('lista Total', this.detCarritoTotal);

    for (let i = 0; i < this.detCarritoTotal.length; i++) {

      console.log('i:', i);
      compraIndividual.jugador = this.detCarritoTotal[i].jugador;
      compraIndividual.cabeceraCarrito = this.detCarritoTotal[i].cabCarrito;
      compraIndividual.cantidad = this.detCarritoTotal[i].cantidad;
      compraIndividual.precio = this.detCarritoTotal[i].precio;
      compraIndividual.subtotal = this.detCarritoTotal[i].subtotal;

      const comprado$ = this._detCarritoService.crear(compraIndividual);

      comprado$
        .subscribe(
          () => {
          },
          () => {
            this.messageService.add({
              key: 'myKey1', severity: 'error', summary: `Error al ingresar ${this.detCarritoTotal[i].nombreCompleto}`
            });
          }
        );

    }


    const totalActualizado = {
      total: this.totalAcomprar,
      estado: 'comprado',
    };


    const actualizarTotalCabCarrito$ = this._cabCarritoService.actualizar(this.idCabCarrito, totalActualizado);

    actualizarTotalCabCarrito$
      .subscribe(
        (carritoIndividual) => {
          this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Compra registrada con éxito'});
        },
        () => {
          this.messageService.add({key: 'myKey1', severity: 'error', summary: 'Error al registrar la compra'});
        }
      );


  }

  listaDelCarrito() {
    return this.detCarritoTotal;
  }

}
