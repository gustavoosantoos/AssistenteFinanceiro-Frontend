import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ListagemAcoesComponent } from './acoes/listagem-acoes/listagem-acoes.component';
import { ListagemCadastrosComponent } from './cadastros/listagem-cadastros/listagem-cadastros.component';
import { FormContasComponent } from './contas/components/form-contas/form-contas.component';
import { ListagemContasComponent } from './contas/components/listagem-contas/listagem-contas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestaoFinanceiraRoutingModule } from './gestao-financeira-routing.module';
import { ListagemObjetivosComponent } from './objetivos/listagem-objetivos/listagem-objetivos.component';
import { ListagemTransacoesComponent } from './transacoes/listagem-transacoes/listagem-transacoes.component';

@NgModule({
    imports: [
        GestaoFinanceiraRoutingModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        ListagemContasComponent,
        FormContasComponent,
        ListagemTransacoesComponent,
        ListagemObjetivosComponent,
        ListagemAcoesComponent,
        ListagemCadastrosComponent
    ],
    bootstrap: [DashboardComponent],
    providers: []
})
export class GestaoFinanceiraModule { }