import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelayerPageRoutingModule } from './relayer-routing.module';

import { RelayerPage } from './relayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelayerPageRoutingModule
  ],
  declarations: [RelayerPage]
})
export class RelayerPageModule {}
