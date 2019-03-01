import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/gestao/dashboard', pathMatch: 'full' },
  { path: 'gestao', loadChildren: './modules/gestao-financeira/gestao-financeira.module#GestaoFinanceiraModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
