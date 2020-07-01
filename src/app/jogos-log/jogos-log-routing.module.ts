import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosLogPage } from './jogos-log.page';

const routes: Routes = [
  {
    path: '',
    component: JogosLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosLogPageRoutingModule {}
