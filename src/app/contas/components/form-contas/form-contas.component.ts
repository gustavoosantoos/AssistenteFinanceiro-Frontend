import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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

    this.router.navigate(['/contas']);
  }
}
