import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddoctorPage } from './adddoctor.page';

const routes: Routes = [
  {
    path: '',
    component: AdddoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdddoctorPageRoutingModule {}
