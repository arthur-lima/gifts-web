import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PresenteModel } from 'src/app/model/presente-model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PresenteService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  listarTodosPresentes(){
    return Observable.create(ob =>{
      ob.next(this.mockPresentes());
      ob.complete();
    });
    //return this.http.get<PresenteModel[]>(`${this.apiUrl}/listarTodosPresentes`);
  }

  mockPresentes(): any{
    return {
      lista: [
        {
          id: 1,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          nomeImagem: 'liquidificador.png'
        },
        {
          id: 2,
          nome: 'Batedeira',
          descricao: 'Texto explicativo a respeito do item',
          valor: '150,00',
          nomeImagem: 'batedeira.jpg'
        },
        {
          id: 3,
          nome: 'Faqueiro',
          descricao: 'Texto explicativo a respeito do item',
          valor: '50,00',
          nomeImagem: 'faqueiro.jpg'
        },
        {
          id: 4,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          nomeImagem: 'liquidificador.png'
        },
        {
          id: 5,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          nomeImagem: 'liquidificador.png'
        },
        {
          id: 6,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          nomeImagem: 'liquidificador.png'
        }
      ]
    }
  }
}
