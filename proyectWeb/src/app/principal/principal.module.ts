import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrincipalPageRoutingModule,
        MatExpansionModule,
        MatFormFieldModule
    ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}
