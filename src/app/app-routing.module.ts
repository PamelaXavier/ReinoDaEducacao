import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'jogos-port',
    loadChildren: () => import('./jogos-port/jogos-port.module').then( m => m.JogosPortPageModule)
  },
  {
    path: 'jogos-log',
    loadChildren: () => import('./jogos-log/jogos-log.module').then( m => m.JogosLogPageModule)
  },
  {
    path: 'jogo01',
    loadChildren: () => import('./jogosMat/jogo01/jogo01.module').then( m => m.Jogo01PageModule)
  },
  {
    path: 'contando-estrelas',
    loadChildren: () => import('./jogosMat/contando-estrelas/contando-estrelas.module').then( m => m.ContandoEstrelasPageModule)
  },
  {
    path: 'salada-frutas',
    loadChildren: () => import('./jogosMat/salada-frutas/salada-frutas.module').then( m => m.SaladaFrutasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
