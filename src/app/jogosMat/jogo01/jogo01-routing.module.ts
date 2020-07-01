import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jogo01Page } from './jogo01.page';

const routes: Routes = [
  {
    path: '',
    component: Jogo01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jogo01PageRoutingModule {}
