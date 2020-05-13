import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesPage } from './yes.page';

const routes: Routes = [
  {
    path: '',
    component: YesPage
  },
  {
    path: 'the-yes-album',
    loadChildren: () => import('./the-yes-album/the-yes-album.module').then( m => m.TheYesAlbumPageModule)
  },
  {
    path: 'fragile',
    loadChildren: () => import('./fragile/fragile.module').then( m => m.FragilePageModule)
  },
  {
    path: 'close-to-the-edge',
    loadChildren: () => import('./close-to-the-edge/close-to-the-edge.module').then( m => m.CloseToTheEdgePageModule)
  },
  {
    path: 'relayer',
    loadChildren: () => import('./relayer/relayer.module').then( m => m.RelayerPageModule)
  },
  {
    path: 'going-for-the-one',
    loadChildren: () => import('./going-for-the-one/going-for-the-one.module').then( m => m.GoingForTheOnePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesPageRoutingModule {}
