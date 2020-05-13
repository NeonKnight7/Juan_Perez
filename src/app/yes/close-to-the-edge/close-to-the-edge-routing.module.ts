import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseToTheEdgePage } from './close-to-the-edge.page';

const routes: Routes = [
  {
    path: '',
    component: CloseToTheEdgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloseToTheEdgePageRoutingModule {}
