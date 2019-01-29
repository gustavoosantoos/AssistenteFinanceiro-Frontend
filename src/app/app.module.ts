import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListagemAcoesComponent } from './acoes/listagem-acoes/listagem-acoes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemCadastrosComponent } from './cadastros/listagem-cadastros/listagem-cadastros.component';
import { FormContasComponent } from './contas/components/form-contas/form-contas.component';
import { ListagemContasComponent } from './contas/components/listagem-contas/listagem-contas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FabComponent } from './layout/fab/fab.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListagemObjetivosComponent } from './objetivos/listagem-objetivos/listagem-objetivos.component';
import { ListagemTransacoesComponent } from './transacoes/listagem-transacoes/listagem-transacoes.component';



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
    FabComponent,
    FormContasComponent
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
