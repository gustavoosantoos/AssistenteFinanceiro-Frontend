import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtualizarConta } from '../../models/atualizar-conta.model';
import { CadastrarConta } from '../../models/cadastrar-conta.model';
import { ContasService } from '../../services/contas.service';

@Component({
  selector: 'app-form-contas',
  templateUrl: './form-contas.component.html',
  styleUrls: ['./form-contas.component.scss']
})
export class FormContasComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: Boolean = false;
  public codigoConta: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ContasService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      codigo: [''],
      nomeConta: ['', Validators.required],
      saldoInicial: ['', Validators.required],
      nomeIcone: ['', Validators.required],
      corIcone: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(p => {
      this.codigoConta = p['codigo'];
      if (this.codigoConta != null && this.codigoConta !== '') {
        this.obterConta(this.codigoConta);
      }
    });

  }

  obterConta(codigo: string) {
    this.service.obterConta(this.codigoConta).subscribe(c => {
      this.f['codigo'].setValue(c.codigo);
      this.f['nomeConta'].setValue(c.nome);
      this.f['nomeIcone'].setValue(c.icone);
      this.f['corIcone'].setValue(c.cor);
      this.f['saldoInicial'].disable();
    });
  }

  salvarConta() {
    if (this.codigoConta != null && this.codigoConta !== '') {
      this.atualizarConta();
      return;
    }

    this.cadastrarNovaConta();
  }

  atualizarConta() {
    if (!this.isValidForm()) {
      return;
    }

    let { codigo, nomeConta, nomeIcone, corIcone } = this.registerForm.value;
    let conta = new AtualizarConta(codigo, nomeConta, nomeIcone, corIcone);

    this.service.atualizarConta(conta).subscribe(() => {
      this.router.navigate(['/gestao', 'contas']);
    });
  }

  cadastrarNovaConta() {
    if (!this.isValidForm()) {
      return;
    }

    let { nomeConta, saldoInicial, nomeIcone, corIcone } = this.registerForm.value;
    let conta = new CadastrarConta(nomeConta, null, nomeIcone, corIcone, saldoInicial);

    this.service.cadastrarConta(conta).subscribe(() => {
      this.router.navigate(['/gestao', 'contas']);
    });
  }

  cancelar() {
    this.router.navigate(['/gestao', 'contas']);
  }

  get f() { return this.registerForm.controls; }

  private isValidForm(): boolean {
    this.submitted = true;

    for (let fieldName in this.registerForm.controls) {
      let control = this.registerForm.controls[fieldName];
      if (control.invalid) {
        return false;
      }
    }

    return true;
  }
}
