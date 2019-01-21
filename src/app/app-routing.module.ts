import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemContasComponent } from './gestao/contas/listagem-contas/listagem-contas.component';
import { DashboardComponent } from './gestao/dashboard/dashboard.component';
import { DespesasComponent } from './gestao/despesas/despesas.component';
import { ReceitasComponent } from './gestao/receitas/receitas.component';
import { TransacoesComponent } from './gestao/transacoes/transacoes.component';

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
