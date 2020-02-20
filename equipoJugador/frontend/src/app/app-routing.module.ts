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
import {EstaLogeadoPolicy} from "./Services/auth/policies/estaLogeado.policy";
import {EsAdministradorPolicy} from "./Services/auth/policies/esAdministrador.policy";
import {EsUsuarioPolicy} from "./Services/auth/policies/esUsuario.policy";


const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'login/principal',
    component: RutaPrincipalComponent,
    canActivate: [
      EstaLogeadoPolicy,
    ],
    children: [
      {
        path: 'addEquipo',
        component: RutaAddEquipoComponent,
        canActivate: [
          EsAdministradorPolicy,
        ],
      },
      {
        path: 'gestionarEquipo',
        component: RutaGestionarEquipoComponent,
        canActivate: [
          EsAdministradorPolicy,
        ],
      },
      {
        path: 'actualizarEquipo/:idEquipo',
        component: RutaActualizarEquipoComponent,
        canActivate: [
          EsAdministradorPolicy,
        ],
      },
      {
        path: 'addJugador',
        component: RutaAddJugadorComponent,
        canActivate: [
          EsAdministradorPolicy,
        ],
      },
      {
        path: 'gestionarJugador',
        component: RutaGestionarJugadorComponent,
        canActivate: [
          EsAdministradorPolicy,
        ],
      },
      {
        path: 'actualizarJugador/:idJugador',
        component: RutaActualizarJugadorComponent,
        canActivate: [
          EsAdministradorPolicy,
        ],
      },
      {
        path: 'addCarrito',
        component: RutaAddCarritoComponent,
        canActivate: [
          EsUsuarioPolicy,
        ],
      },
      {
        path: 'gestionarCarrito',
        component: RutaGestionarCarritoComponent,
        canActivate: [
          EsUsuarioPolicy,
        ],
      },
      {
        path: 'actualizarCarrito/:idCarrito',
        component: RutaActualizarCarritoComponent,
        canActivate: [
          EsUsuarioPolicy,
        ],
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
