import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchuddoctorPageRoutingModule } from './searchuddoctor-routing.module';

import { SearchuddoctorPage } from './searchuddoctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchuddoctorPageRoutingModule
  ],
  declarations: [SearchuddoctorPage]
})
export class SearchuddoctorPageModule {}
