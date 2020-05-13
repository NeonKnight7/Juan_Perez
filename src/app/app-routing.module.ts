import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children:[
      {
        path: "",
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'yes',
        loadChildren: () => import('./yes/yes.module').then(m=>m.YesPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'yes',
    children:[
      {
        path: "",
        loadChildren: () => import('./yes/yes.module').then(m=>m.YesPageModule)
      },
      {
        path: 'The-Yes-Album',
        loadChildren: () => import('./yes/the-yes-album/the-yes-album.module').then(m=>m.TheYesAlbumPageModule)
      },
      {
        path: 'Fragile',
        loadChildren: () => import('./yes/fragile/fragile.module').then(m=>m.FragilePageModule)
      },
      {
        path: 'Close-to-the-Edge',
        loadChildren: () => import('./yes/close-to-the-edge/close-to-the-edge.module').then(m=>m.CloseToTheEdgePageModule)
      },
      {
        path: 'Relayer',
        loadChildren: () => import('./yes/relayer/relayer.module').then(m=>m.RelayerPageModule)
      },
      {
        path: 'Going-for-the-One',
        loadChildren: () => import('./yes/going-for-the-one/going-for-the-one.module').then(m=>m.GoingForTheOnePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
