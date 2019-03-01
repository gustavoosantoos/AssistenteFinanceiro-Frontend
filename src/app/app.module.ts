import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ListagemAcoesComponent } from './modules/acoes/listagem-acoes/listagem-acoes.component';
import { ListagemCadastrosComponent } from './modules/cadastros/listagem-cadastros/listagem-cadastros.component';
import { FormContasComponent } from './modules/contas/components/form-contas/form-contas.component';
import { ListagemContasComponent } from './modules/contas/components/listagem-contas/listagem-contas.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ListagemObjetivosComponent } from './modules/objetivos/listagem-objetivos/listagem-objetivos.component';
import { ListagemTransacoesComponent } from './modules/transacoes/listagem-transacoes/listagem-transacoes.component';
import { FabComponent } from './shared/components/fab/fab.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';

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
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
