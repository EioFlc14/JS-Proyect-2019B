import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchuddoctorPage } from './searchuddoctor.page';

const routes: Routes = [
  {
    path: '',
    component: SearchuddoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchuddoctorPageRoutingModule {}
