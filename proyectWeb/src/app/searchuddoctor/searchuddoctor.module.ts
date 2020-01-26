import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchuddoctorPageRoutingModule } from './searchuddoctor-routing.module';

import { SearchuddoctorPage } from './searchuddoctor.page';
import {ButtonModule, TableModule} from 'primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchuddoctorPageRoutingModule,
        TableModule,
        ButtonModule,
    ],
  declarations: [SearchuddoctorPage]
})
export class SearchuddoctorPageModule {}
