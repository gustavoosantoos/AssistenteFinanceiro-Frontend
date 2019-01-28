import { Component, OnInit } from '@angular/core';
import { Conta } from '../../models/conta.model';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.scss']
})
export class ListagemContasComponent implements OnInit {

  contas: Array<Conta> = [
    new Conta(-120, -200, 12, 2, 'Conta Corrente'),
    new Conta(1200, 1502, 15, 1, 'Dinheiro na Carteira')
  ];

  constructor() { }

  ngOnInit() {
  }

}
