import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.scss']
})
export class ListagemContasComponent implements OnInit {
  public contas: Array<any> = [
    { nome: 'Conta Corrente', saldo: 132.0, saldoFinalMes: 0, icon: {color: '#767474', icon: 'attach_money'}},
    { nome: 'Conta Poupança', saldo: 12.0, saldoFinalMes: 0, icon: {color: 'rgb(153, 51, 204)', icon: 'attach_money'}},
    { nome: 'Dinheiro na Carteira', saldo: 1030.0, saldoFinalMes: 0, icon: {color: 'rgb(36, 132, 122)', icon: 'attach_money'}},
    { nome: 'Teste', saldo: -123.0, saldoFinalMes: 1300, icon: {color: 'rgb(194, 201, 0)', icon: 'show_chart'}}
  ];

  constructor() { }

  ngOnInit() {
  }

}
