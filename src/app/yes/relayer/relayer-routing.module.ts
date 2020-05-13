import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelayerPage } from './relayer.page';

const routes: Routes = [
  {
    path: '',
    component: RelayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelayerPageRoutingModule {}
