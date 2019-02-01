import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  private codigoConta: string;

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

    this.codigoConta = this.activatedRoute.snapshot.params['codigo'];
    if (this.codigoConta != null) {

    }
  }

  salvarConta() {
    if (this.f['codigo'].value != null) {
      this.atualizarConta();
      return;
    }

    this.cadastrarNovaConta();
  }

  atualizarConta() {

  }

  cadastrarNovaConta() {
    this.submitted = true;

    for (let fieldName in this.registerForm.controls) {
      let control = this.registerForm.controls[fieldName];
      if (control.invalid) {
        return;
      }
    }

    let { nomeConta, saldoInicial, nomeIcone, corIcone } = this.registerForm.value;
    let conta = new CadastrarConta(nomeConta, null, nomeIcone, corIcone, saldoInicial);

    this.service.cadastrarConta(conta).subscribe(() => {
      this.router.navigate(['/contas']);
    });
  }

  obterConta(codigo: string) {
    this.service.obterConta(codigo).subscribe(c => {

    });
  }

  get f() { return this.registerForm.controls; }
}
