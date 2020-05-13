import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FragilePageRoutingModule } from './fragile-routing.module';

import { FragilePage } from './fragile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FragilePageRoutingModule
  ],
  declarations: [FragilePage]
})
export class FragilePageModule {}
