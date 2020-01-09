import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatemedicalcheckPageRoutingModule } from './updatemedicalcheck-routing.module';

import { UpdatemedicalcheckPage } from './updatemedicalcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatemedicalcheckPageRoutingModule
  ],
  declarations: [UpdatemedicalcheckPage]
})
export class UpdatemedicalcheckPageModule {}
