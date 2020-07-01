import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosPortPage } from './jogos-port.page';

const routes: Routes = [
  {
    path: '',
    component: JogosPortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosPortPageRoutingModule {}
