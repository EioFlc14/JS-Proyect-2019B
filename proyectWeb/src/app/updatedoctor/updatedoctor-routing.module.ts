import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatedoctorPage } from './updatedoctor.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatedoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatedoctorPageRoutingModule {}
