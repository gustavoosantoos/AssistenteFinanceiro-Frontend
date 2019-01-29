import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  criarConta() {
    this.router.navigate(['contas/nova']);
  }
}
