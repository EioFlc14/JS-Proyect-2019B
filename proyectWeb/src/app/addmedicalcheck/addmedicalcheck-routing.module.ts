import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmedicalcheckPage } from './addmedicalcheck.page';

const routes: Routes = [
  {
    path: '',
    component: AddmedicalcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmedicalcheckPageRoutingModule {}
