import { PresenteModel } from './presente-model';

export class ContatoModel {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
    presenteEscolhido: PresenteModel;

    constructor(){}
}
