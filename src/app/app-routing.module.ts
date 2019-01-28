import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListagemContasComponent } from './contas/listagem-contas/listagem-contas.component';
import { ListagemTransacoesComponent } from './transacoes/listagem-transacoes/listagem-transacoes.component';
import { ListagemObjetivosComponent } from './objetivos/listagem-objetivos/listagem-objetivos.component';
import { ListagemCadastrosComponent } from './cadastros/listagem-cadastros/listagem-cadastros.component';
import { ListagemAcoesComponent } from './acoes/listagem-acoes/listagem-acoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contas', component: ListagemContasComponent},
  { path: 'transacoes', component: ListagemTransacoesComponent },
  { path: 'objetivos', component: ListagemObjetivosComponent },
  { path: 'acoes', component: ListagemAcoesComponent},
  { path: 'cadastros', component: ListagemCadastrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
