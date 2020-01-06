import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatedoctorPageRoutingModule } from './updatedoctor-routing.module';

import { UpdatedoctorPage } from './updatedoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedoctorPageRoutingModule
  ],
  declarations: [UpdatedoctorPage]
})
export class UpdatedoctorPageModule {}
