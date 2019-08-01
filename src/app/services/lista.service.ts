import { Injectable } from '@angular/core';
import { ListaModel } from '../model/interfaces/lista-model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  localPrefixo: string = '../assets/images/';
  
  constructor() { }

  getListaDePresentes(): any{
    return {
      lista: [
        {
          id: 1,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          localImagem: this.localPrefixo + 'liquidificador.png'
        },
        {
          id: 2,
          nome: 'Batedeira',
          descricao: 'Texto explicativo a respeito do item',
          valor: '150,00',
          localImagem: this.localPrefixo + 'batedeira.jpg'
        },
        {
          id: 3,
          nome: 'Faqueiro',
          descricao: 'Texto explicativo a respeito do item',
          valor: '50,00',
          localImagem: this.localPrefixo + 'faqueiro.jpg'
        },
        {
          id: 4,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          localImagem: this.localPrefixo + 'liquidificador.png'
        },
        {
          id: 5,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          localImagem: this.localPrefixo + 'liquidificador.png'
        },
        {
          id: 6,
          nome: 'Liquidificador',
          descricao: 'Texto explicativo a respeito do item',
          valor: '100,00',
          localImagem: this.localPrefixo + 'liquidificador.png'
        }
      ]
    }
  }
}
