import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPrincipalComponent} from "./rutas/ruta-principal/ruta-principal.component";
import {RutaAddDoctorComponent} from "./rutas/ruta-add-doctor/ruta-add-doctor.component";
import {RutaManageDoctorComponent} from "./rutas/ruta-manage-doctor/ruta-manage-doctor.component";
import {RutaUpdateDoctorComponent} from "./rutas/ruta-update-doctor/ruta-update-doctor.component";
import {RutaAddPatientComponent} from "./rutas/ruta-add-patient/ruta-add-patient.component";
import {RutaManagePatientComponent} from "./rutas/ruta-manage-patient/ruta-manage-patient.component";
import {RutaUpdatePatientComponent} from "./rutas/ruta-update-patient/ruta-update-patient.component";
import {RutaAddMedicalCheckComponent} from "./rutas/ruta-add-medical-check/ruta-add-medical-check.component";
import {RutaManageMedicalCheckComponent} from "./rutas/ruta-manage-medical-check/ruta-manage-medical-check.component";
import {RutaUpdateMedicalCheckComponent} from "./rutas/ruta-update-medical-check/ruta-update-medical-check.component";
import {EstaLogeadoPolicy} from "./services/auth/policies/estaLogeado.policy";
import {AddDoctorPolicy} from "./services/auth/policies/addDoctor.policy";
import {ManageDoctorPolicy} from "./services/auth/policies/manageDoctor.policy";
import {UpdateDoctorPolicy} from "./services/auth/policies/updateDoctor.policy";
import {AddPatientPolicy} from "./services/auth/policies/addPatient.policy";
import {ManagePatientPolicy} from "./services/auth/policies/managePatient.policy";
import {UpdatePatientPolicy} from "./services/auth/policies/updatePatient.policy";
import {AddMedicalCheckPolicy} from "./services/auth/policies/addMedicalCheck.policy";
import {ManageMedicalCheckPolicy} from "./services/auth/policies/manageMedicalCheck.policy";
import {UpdateMedicalCheckPolicy} from "./services/auth/policies/updateMedicalCheck.policy";


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
        path: 'addDoctor',
        component: RutaAddDoctorComponent,
        canActivate: [
          AddDoctorPolicy,
        ],
      },
      {
        path: 'manageDoctor',
        component: RutaManageDoctorComponent,
        canActivate: [
          ManageDoctorPolicy,
        ],
      },
      {
        path: 'updateDoctor/:idDoctor',
        component: RutaUpdateDoctorComponent,
        canActivate: [
          UpdateDoctorPolicy,
        ],
      },
      {
        path: 'addPatient',
        component: RutaAddPatientComponent,
        canActivate: [
          AddPatientPolicy,
        ],
      },
      {
        path: 'managePatient',
        component: RutaManagePatientComponent,
        canActivate: [
          ManagePatientPolicy,
        ],
      },
      {
        path: 'updatePatient/:idPatient',
        component: RutaUpdatePatientComponent,
        canActivate: [
          UpdatePatientPolicy,
        ],
      },
      {
        path: 'addMedicalCheck',
        component: RutaAddMedicalCheckComponent,
        canActivate: [
          AddMedicalCheckPolicy,
        ],
      },
      {
        path: 'manageMedicalCheck',
        component: RutaManageMedicalCheckComponent,
        canActivate: [
          ManageMedicalCheckPolicy,
        ],
      },
      {
        path: 'updateMedicalCheck/:idMedicalCheck',
        component: RutaUpdateMedicalCheckComponent,
        canActivate: [
          UpdateMedicalCheckPolicy,
        ],
      }
    ]
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
