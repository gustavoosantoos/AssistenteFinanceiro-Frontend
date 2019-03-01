import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-transacoes',
  templateUrl: './listagem-transacoes.component.html',
  styleUrls: ['./listagem-transacoes.component.scss']
})
export class ListagemTransacoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  criarTransacao() {
    // TODO - Adicionar tela de criação de transações, tela ou modal?
  }
}
