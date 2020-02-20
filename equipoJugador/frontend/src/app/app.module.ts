import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaPrincipalComponent } from './Rutas/ruta-principal/ruta-principal.component';
import { RutaAddEquipoComponent } from './Rutas/ruta-add-equipo/ruta-add-equipo.component';
import { RutaAddJugadorComponent } from './Rutas/ruta-add-jugador/ruta-add-jugador.component';
import { RutaActualizarCarritoComponent } from './Rutas/ruta-actualizar-carrito/ruta-actualizar-carrito.component';
import { RutaActualizarEquipoComponent } from './Rutas/ruta-actualizar-equipo/ruta-actualizar-equipo.component';
import { RutaActualizarJugadorComponent } from './Rutas/ruta-actualizar-jugador/ruta-actualizar-jugador.component';
import { RutaAddCarritoComponent } from './Rutas/ruta-add-carrito/ruta-add-carrito.component';
import { RutaGestionarEquipoComponent } from './Rutas/ruta-gestionar-equipo/ruta-gestionar-equipo.component';
import { RutaGestionarJugadorComponent } from './Rutas/ruta-gestionar-jugador/ruta-gestionar-jugador.component';
import {
  ButtonModule,
  CalendarModule,
  DropdownModule,
  InputTextModule,
  MegaMenuModule,
  MessageService, TableModule,
  ToastModule
} from "primeng";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./Services/auth/auth.services";
import {HttpClientModule} from "@angular/common/http";
import { RutaGestionarCarritoComponent } from './Rutas/ruta-gestionar-carrito/ruta-gestionar-carrito.component';
import { RutaAddUsuarioComponent } from './Rutas/ruta-add-usuario/ruta-add-usuario.component';
import { RutaActualizarUsuarioComponent } from './Rutas/ruta-actualizar-usuario/ruta-actualizar-usuario.component';
import { RutaGestionarUsuarioComponent } from './Rutas/ruta-gestionar-usuario/ruta-gestionar-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaPrincipalComponent,
    RutaAddEquipoComponent,
    RutaAddJugadorComponent,
    RutaActualizarCarritoComponent,
    RutaActualizarEquipoComponent,
    RutaActualizarJugadorComponent,
    RutaAddCarritoComponent,
    RutaGestionarEquipoComponent,
    RutaGestionarJugadorComponent,
    RutaGestionarCarritoComponent,
    RutaAddUsuarioComponent,
    RutaActualizarUsuarioComponent,
    RutaGestionarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    MegaMenuModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ],
  providers: [
    AuthService,
    MessageService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
