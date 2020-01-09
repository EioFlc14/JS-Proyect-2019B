import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmedicalcheckPageRoutingModule } from './addmedicalcheck-routing.module';

import { AddmedicalcheckPage } from './addmedicalcheck.page';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from "@angular/material/input";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddmedicalcheckPageRoutingModule,
        MatAutocompleteModule,
        MatInputModule
    ],
  declarations: [AddmedicalcheckPage]
})
export class AddmedicalcheckPageModule {}
