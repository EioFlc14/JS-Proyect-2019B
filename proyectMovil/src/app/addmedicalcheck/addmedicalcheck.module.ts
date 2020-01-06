import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmedicalcheckPageRoutingModule } from './addmedicalcheck-routing.module';

import { AddmedicalcheckPage } from './addmedicalcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmedicalcheckPageRoutingModule
  ],
  declarations: [AddmedicalcheckPage]
})
export class AddmedicalcheckPageModule {}
