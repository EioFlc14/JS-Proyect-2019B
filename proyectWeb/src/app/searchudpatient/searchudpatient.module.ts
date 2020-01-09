import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchudpatientPageRoutingModule } from './searchudpatient-routing.module';

import { SearchudpatientPage } from './searchudpatient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchudpatientPageRoutingModule
  ],
  declarations: [SearchudpatientPage]
})
export class SearchudpatientPageModule {}
