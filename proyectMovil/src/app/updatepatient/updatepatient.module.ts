import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepatientPageRoutingModule } from './updatepatient-routing.module';

import { UpdatepatientPage } from './updatepatient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepatientPageRoutingModule
  ],
  declarations: [UpdatepatientPage]
})
export class UpdatepatientPageModule {}
