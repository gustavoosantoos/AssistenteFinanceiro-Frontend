import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../../models/conta.model';
import { ContasService } from '../../services/contas.service';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.scss']
})
export class ListagemContasComponent implements OnInit {

  contas: Array<Conta> = [];

  constructor(
    private router: Router,
    private service: ContasService
  ) { }

  ngOnInit() {
    this.obterContas();
  }

  obterContas() {
    this.service.obterContas().subscribe(r => {
      this.contas = r;
    });
  }

  criarConta() {
    this.router.navigate(['contas/nova']);
  }

  removerConta(codigo: string) {
    this.service.removerConta(codigo).subscribe(r => {
      this.obterContas();
    });
  }
}
