import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddoctorPageRoutingModule } from './adddoctor-routing.module';

import { AdddoctorPage } from './adddoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddoctorPageRoutingModule
  ],
  declarations: [AdddoctorPage]
})
export class AdddoctorPageModule {}
