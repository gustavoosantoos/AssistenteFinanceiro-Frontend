import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListagemContasComponent } from './contas/listagem-contas/listagem-contas.component';
import { ListagemTransacoesComponent } from './transacoes/listagem-transacoes/listagem-transacoes.component';
import { ListagemObjetivosComponent } from './objetivos/listagem-objetivos/listagem-objetivos.component';
import { ListagemCadastrosComponent } from './cadastros/listagem-cadastros/listagem-cadastros.component';
import { ListagemAcoesComponent } from './acoes/listagem-acoes/listagem-acoes.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { FabComponent } from './layout/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ListagemContasComponent,
    ListagemTransacoesComponent,
    ListagemObjetivosComponent,
    ListagemCadastrosComponent,
    ListagemAcoesComponent,
    PageHeaderComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
