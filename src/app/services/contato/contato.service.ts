import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContatoModel } from 'src/app/models/contato-model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  cadastrar(contato: ContatoModel){
    return this.http.post<ContatoModel>(`${this.apiUrl}contatos`, contato);
  }

  atualizar(contato: ContatoModel){
    return this.http.put<ContatoModel>(`${this.apiUrl}contatos`, contato);
  }

  buscarContatoPorEmail(email: string){
    return this.http.get<ContatoModel>(`${this.apiUrl}contatos/email/${email}`);
  }
}
