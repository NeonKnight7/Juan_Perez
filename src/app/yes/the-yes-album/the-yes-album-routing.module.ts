import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheYesAlbumPage } from './the-yes-album.page';

const routes: Routes = [
  {
    path: '',
    component: TheYesAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheYesAlbumPageRoutingModule {}
