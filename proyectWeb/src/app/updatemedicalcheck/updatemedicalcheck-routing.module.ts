import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatemedicalcheckPage } from './updatemedicalcheck.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatemedicalcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatemedicalcheckPageRoutingModule {}
