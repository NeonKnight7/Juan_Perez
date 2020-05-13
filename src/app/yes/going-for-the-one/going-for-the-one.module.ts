import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoingForTheOnePageRoutingModule } from './going-for-the-one-routing.module';

import { GoingForTheOnePage } from './going-for-the-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoingForTheOnePageRoutingModule
  ],
  declarations: [GoingForTheOnePage]
})
export class GoingForTheOnePageModule {}
