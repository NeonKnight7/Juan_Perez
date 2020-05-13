import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FragilePage } from './fragile.page';

const routes: Routes = [
  {
    path: '',
    component: FragilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FragilePageRoutingModule {}
