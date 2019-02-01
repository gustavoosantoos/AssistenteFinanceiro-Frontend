import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CadastrarConta } from '../models/cadastrar-conta.model';
import { Conta } from '../models/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  private serviceUrl: string = environment.baseServerUrl + '/contas';

  constructor(
    private http: HttpClient
  ) { }

  public obterConta(codigo: string): Observable<Conta> {
    return this.http.get<Conta>(this.serviceUrl + '/' + codigo);
  }

  public obterContas(): Observable<Array<Conta>> {
    return this.http.get<Array<Conta>>(this.serviceUrl);
  }

  public cadastrarConta(conta: CadastrarConta): Observable<any> {
    return this.http.post(this.serviceUrl, conta);
  }

  public removerConta(codigo: string): Observable<any> {
    return this.http.delete(this.serviceUrl + '/' + codigo);
  }
}
