import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conta } from '../models/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  private serviceUrl: string = environment.baseServerUrl + '/contas';

  constructor(
    private http: HttpClient
  ) { }

  public obterContas(): Observable<Array<Conta>> {
    return this.http.get<Array<Conta>>(this.serviceUrl);
  }

  public cadastrarConta(conta: Conta): Observable<any> {
    return this.http.post(this.serviceUrl, conta);
  }
}
