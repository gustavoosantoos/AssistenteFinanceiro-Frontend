import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemAcoesComponent } from './acoes/listagem-acoes/listagem-acoes.component';
import { ListagemCadastrosComponent } from './cadastros/listagem-cadastros/listagem-cadastros.component';
import { FormContasComponent } from './contas/components/form-contas/form-contas.component';
import { ListagemContasComponent } from './contas/components/listagem-contas/listagem-contas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListagemObjetivosComponent } from './objetivos/listagem-objetivos/listagem-objetivos.component';
import { ListagemTransacoesComponent } from './transacoes/listagem-transacoes/listagem-transacoes.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contas', component: ListagemContasComponent },
  { path: 'contas/nova', component: FormContasComponent },
  { path: 'transacoes', component: ListagemTransacoesComponent },
  { path: 'objetivos', component: ListagemObjetivosComponent },
  { path: 'acoes', component: ListagemAcoesComponent },
  { path: 'cadastros', component: ListagemCadastrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
