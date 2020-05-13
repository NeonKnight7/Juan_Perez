import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloseToTheEdgePageRoutingModule } from './close-to-the-edge-routing.module';

import { CloseToTheEdgePage } from './close-to-the-edge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloseToTheEdgePageRoutingModule
  ],
  declarations: [CloseToTheEdgePage]
})
export class CloseToTheEdgePageModule {}
