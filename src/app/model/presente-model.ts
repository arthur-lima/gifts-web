import { CurrencyPipe } from '@angular/common';

export class PresenteModel {
    public id: number;
    public nome: string;
    public descricao: string;
    public valor: CurrencyPipe;
    public nomeImagem?: string;

    constructor(){}
}
