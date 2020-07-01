import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosLogPageRoutingModule } from './jogos-log-routing.module';

import { JogosLogPage } from './jogos-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogosLogPageRoutingModule
  ],
  declarations: [JogosLogPage]
})
export class JogosLogPageModule {}
