import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitasComponent } from './gestao/receitas/receitas.component';
import { DashboardComponent } from './gestao/dashboard/dashboard.component';
import { DespesasComponent } from './gestao/despesas/despesas.component';
import { TransacoesComponent } from './gestao/transacoes/transacoes.component';
import { ListagemContasComponent } from './gestao/contas/listagem-contas/listagem-contas.component';

const routes: Routes = [
  { path: 'gestao', component: DashboardComponent },
  { path: 'gestao/contas', component: ListagemContasComponent},
  { path: 'gestao/transacoes', component: TransacoesComponent},
  { path: 'gestao/receitas', component: ReceitasComponent },
  { path: 'gestao/despesas', component: DespesasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
