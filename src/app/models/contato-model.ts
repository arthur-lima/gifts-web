import { PresenteModel } from './presente-model';

export class ContatoModel {
    _id: number;
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
    presentes: [PresenteModel];

    constructor(){}
}
