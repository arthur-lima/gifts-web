import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContatoModel } from 'src/app/model/contato-model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }
  

  salvar(contato: ContatoModel){
    return this.http.post<ContatoModel>(`${this.apiUrl}contatos`, contato);
  }
}
