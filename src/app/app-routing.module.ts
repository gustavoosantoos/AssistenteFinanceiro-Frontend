import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitasComponent } from './gestao/receitas/receitas.component';

const routes: Routes = [
  { path: 'gestao/receitas', component: ReceitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
