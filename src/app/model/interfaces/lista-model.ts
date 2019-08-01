import { CurrencyPipe } from '@angular/common';

export interface ListaModel {
    id: Number,
    nome: String,
    descricao: String,
    valor: CurrencyPipe,
    localImagem: String
}
