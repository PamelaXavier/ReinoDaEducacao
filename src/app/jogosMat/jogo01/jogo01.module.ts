import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jogo01PageRoutingModule } from './jogo01-routing.module';

import { Jogo01Page } from './jogo01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jogo01PageRoutingModule
  ],
  declarations: [Jogo01Page]
})
export class Jogo01PageModule {}
