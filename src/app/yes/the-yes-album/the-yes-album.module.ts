import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheYesAlbumPageRoutingModule } from './the-yes-album-routing.module';

import { TheYesAlbumPage } from './the-yes-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheYesAlbumPageRoutingModule
  ],
  declarations: [TheYesAlbumPage]
})
export class TheYesAlbumPageModule {}
