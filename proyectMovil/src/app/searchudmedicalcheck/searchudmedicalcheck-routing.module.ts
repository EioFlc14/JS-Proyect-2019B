import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchudmedicalcheckPage } from './searchudmedicalcheck.page';

const routes: Routes = [
  {
    path: '',
    component: SearchudmedicalcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchudmedicalcheckPageRoutingModule {}
