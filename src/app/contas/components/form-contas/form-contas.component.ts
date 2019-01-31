import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from '../../models/conta.model';
import { ContasService } from '../../services/contas.service';

@Component({
  selector: 'app-form-contas',
  templateUrl: './form-contas.component.html',
  styleUrls: ['./form-contas.component.scss']
})
export class FormContasComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ContasService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nomeConta: ['', Validators.required],
      saldoInicial: ['', Validators.required],
      nomeIcone: ['', Validators.required],
      corIcone: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  cadastrarNovaConta() {
    this.submitted = true;

    for (let fieldName in this.registerForm.controls) {
      let control = this.registerForm.controls[fieldName];
      if (control.invalid) {
        return;
      }
    }

    let { nomeConta, saldoInicial, nomeIcone, corIcone } = this.registerForm.value;
    let conta = new Conta(nomeConta, saldoInicial, 0, 0, 0, null, nomeIcone, corIcone);

    this.service.cadastrarConta(conta).subscribe(() => {
      this.router.navigate(['/contas']);
    });
  }
}
