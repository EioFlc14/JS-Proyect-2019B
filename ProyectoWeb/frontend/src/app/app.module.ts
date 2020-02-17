import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPrincipalComponent } from './rutas/ruta-principal/ruta-principal.component';
import { RutaAddDoctorComponent } from './rutas/ruta-add-doctor/ruta-add-doctor.component';
import { RutaAddPatientComponent } from './rutas/ruta-add-patient/ruta-add-patient.component';
import { RutaAddMedicalCheckComponent } from './rutas/ruta-add-medical-check/ruta-add-medical-check.component';
import { RutaManageDoctorComponent } from './rutas/ruta-manage-doctor/ruta-manage-doctor.component';
import { RutaManagePatientComponent } from './rutas/ruta-manage-patient/ruta-manage-patient.component';
import { RutaManageMedicalCheckComponent } from './rutas/ruta-manage-medical-check/ruta-manage-medical-check.component';
import { RutaUpdateDoctorComponent } from './rutas/ruta-update-doctor/ruta-update-doctor.component';
import { RutaUpdatePatientComponent } from './rutas/ruta-update-patient/ruta-update-patient.component';
import { RutaUpdateMedicalCheckComponent } from './rutas/ruta-update-medical-check/ruta-update-medical-check.component';
import {
  ButtonModule,
  CalendarModule,
  DropdownModule,
  InputTextareaModule,
  InputTextModule, MegaMenuModule, MessageService, MultiSelectModule, SliderModule,
  SplitButtonModule, TableModule, ToastModule
} from 'primeng';
import {FormsModule} from "@angular/forms";
import {AutoCompleteModule} from 'primeng/autocomplete';
import { HttpClientModule} from "@angular/common/http";
import {SpecialtyService} from "./services/rest/specialty.service";
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaPrincipalComponent,
    RutaAddDoctorComponent,
    RutaAddPatientComponent,
    RutaAddMedicalCheckComponent,
    RutaManageDoctorComponent,
    RutaManagePatientComponent,
    RutaManageMedicalCheckComponent,
    RutaUpdateDoctorComponent,
    RutaUpdatePatientComponent,
    RutaUpdateMedicalCheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SplitButtonModule,
    DropdownModule,
    MegaMenuModule,
    AutoCompleteModule,
    TableModule,
    SliderModule,
    MultiSelectModule,
    HttpClientModule,
    ToastModule

  ],
  providers: [
    SpecialtyService,
    MessageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
