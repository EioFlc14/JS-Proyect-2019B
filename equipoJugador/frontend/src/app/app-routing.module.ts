import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./Rutas/ruta-login/ruta-login.component";
import {RutaPrincipalComponent} from "./Rutas/ruta-principal/ruta-principal.component";
import {RutaAddEquipoComponent} from "./Rutas/ruta-add-equipo/ruta-add-equipo.component";
import {RutaGestionarEquipoComponent} from "./Rutas/ruta-gestionar-equipo/ruta-gestionar-equipo.component";
import {RutaActualizarEquipoComponent} from "./Rutas/ruta-actualizar-equipo/ruta-actualizar-equipo.component";
import {RutaAddJugadorComponent} from "./Rutas/ruta-add-jugador/ruta-add-jugador.component";
import {RutaGestionarJugadorComponent} from "./Rutas/ruta-gestionar-jugador/ruta-gestionar-jugador.component";
import {RutaActualizarJugadorComponent} from "./Rutas/ruta-actualizar-jugador/ruta-actualizar-jugador.component";
import {RutaAddCarritoComponent} from "./Rutas/ruta-add-carrito/ruta-add-carrito.component";
import {RutaActualizarCarritoComponent} from "./Rutas/ruta-actualizar-carrito/ruta-actualizar-carrito.component";
import {RutaGestionarCarritoComponent} from "./Rutas/ruta-gestionar-carrito/ruta-gestionar-carrito.component";
import {RutaAddUsuarioComponent} from "./Rutas/ruta-add-usuario/ruta-add-usuario.component";
import {RutaActualizarUsuarioComponent} from "./Rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component";
import {RutaGestionarUsuarioComponent} from "./Rutas/ruta-gestionar-usuario/ruta-gestionar-usuario.component";


const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'login/principal',
    component: RutaPrincipalComponent,
    // canActivate: [
    //   EstaLogeadoPolicy,
    // ],
    children: [
      {
        path: 'addEquipo',
        component: RutaAddEquipoComponent,
        // canActivate: [
        //   AddDoctorPolicy,
        // ],
      },
      {
        path: 'gestionarEquipo',
        component: RutaGestionarEquipoComponent,
        // canActivate: [
        //   ManageDoctorPolicy,
        // ],
      },
      {
        path: 'actualizarEquipo/:idEquipo',
        component: RutaActualizarEquipoComponent,
        // canActivate: [
        //   UpdateDoctorPolicy,
        // ],
      },
      {
        path: 'addJugador',
        component: RutaAddJugadorComponent,
        // canActivate: [
        //   AddPatientPolicy,
        // ],
      },
      {
        path: 'gestionarJugador',
        component: RutaGestionarJugadorComponent,
        // canActivate: [
        //   ManagePatientPolicy,
        // ],
      },
      {
        path: 'actualizarJugador/:idJugador',
        component: RutaActualizarJugadorComponent,
        // canActivate: [
        //   UpdatePatientPolicy,
        // ],
      },
      {
        path: 'addCarrito',
        component: RutaAddCarritoComponent,
        // canActivate: [
        //   AddMedicalCheckPolicy,
        // ],
      },
      {
        path: 'gestionarCarrito',
        component: RutaGestionarCarritoComponent,
        // canActivate: [
        //   ManageMedicalCheckPolicy,
        // ],
      },
      {
        path: 'actualizarCarrito/:idCarrito',
        component: RutaActualizarCarritoComponent,
        // canActivate: [
        //   UpdateMedicalCheckPolicy,
        // ],
      },
      {
        path: 'addUsuario',
        component: RutaAddUsuarioComponent,
      },
      {
        path: 'actualizarUsuario/:idUsuario',
        component: RutaActualizarUsuarioComponent
      },
      {
        path: 'gestionarUsuario',
        component: RutaGestionarUsuarioComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
