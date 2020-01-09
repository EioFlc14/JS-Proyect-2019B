import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchudpatientPage } from './searchudpatient.page';

const routes: Routes = [
  {
    path: '',
    component: SearchudpatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchudpatientPageRoutingModule {}
