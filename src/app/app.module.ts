import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemContasComponent } from './gestao/contas/listagem-contas/listagem-contas.component';
import { DashboardComponent } from './gestao/dashboard/dashboard.component';
import { DespesasComponent } from './gestao/despesas/despesas.component';
import { ReceitasComponent } from './gestao/receitas/receitas.component';
import { TransacoesComponent } from './gestao/transacoes/transacoes.component';
import { MenuSuperiorComponent } from './layout/menu-superior/menu-superior.component';
import { PageFooterComponent } from './layout/page-footer/page-footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { PageTitleComponent } from './layout/page-title/page-title.component';



@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    MenuSuperiorComponent,
    ReceitasComponent,
    DashboardComponent,
    DespesasComponent,
    TransacoesComponent,
    ListagemContasComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
