import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosPortPageRoutingModule } from './jogos-port-routing.module';

import { JogosPortPage } from './jogos-port.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogosPortPageRoutingModule
  ],
  declarations: [JogosPortPage]
})
export class JogosPortPageModule {}
