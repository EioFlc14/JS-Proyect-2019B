import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchudmedicalcheckPageRoutingModule } from './searchudmedicalcheck-routing.module';

import { SearchudmedicalcheckPage } from './searchudmedicalcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchudmedicalcheckPageRoutingModule
  ],
  declarations: [SearchudmedicalcheckPage]
})
export class SearchudmedicalcheckPageModule {}
