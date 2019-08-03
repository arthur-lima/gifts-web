import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContatoModel } from 'src/app/models/contato-model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  apiUrl = environment.apiUrl;


  constructor(public http: HttpClient) { }

  cadastrar(contato: ContatoModel) {
    return this.http.post<ContatoModel>(`${this.apiUrl}contatos`, contato);
  }

  //TODO: Mudar os demais para esta abordagem e inserir um errorHandle
  atualizar(contato: ContatoModel): Observable<ContatoModel> {
    return this.http.put<ContatoModel>(`${this.apiUrl}contatos/${contato._id}`, contato, httpOptions).pipe();
  }

  buscarContatoPorEmail(email: string) {
    return this.http.get<ContatoModel>(`${this.apiUrl}contatos/email/${email}`);
  }
}
