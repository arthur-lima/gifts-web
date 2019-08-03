import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PresenteModel } from 'src/app/models/presente-model';
import { ContatoModel } from 'src/app/models/contato-model';
import { ContatoService } from 'src/app/services/contato/contato.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { ModalMessagesComponent } from '../modal-messages/modal-messages.component';
import { ModalMensagensModel } from 'src/app/models/modal-mensagens-model';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent implements OnInit {
  @Input() presenteEscolhido: PresenteModel;
  resumoDescricaoPresente: string;
  cadastroFormulario: FormGroup;
  msgErro: string;

  constructor(
    public activeModal: NgbActiveModal,
    public contatoService: ContatoService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.prepararVariaveis();
    this.criarValidadorFormulario();
  }

  prepararVariaveis() {
    this.resumoDescricaoPresente = this.presenteEscolhido.nome + ' - R$ '
      + formatCurrency(this.presenteEscolhido.valor, 'pt', '');
  }

  criarValidadorFormulario() {
    this.cadastroFormulario = new FormGroup({
      'nome': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      'telefone': new FormControl('', [
        Validators.required
      ]),
      'resumoDescricaoPresente': new FormControl({
        value: this.resumoDescricaoPresente,
        disabled: true
      }),
      'mensagem': new FormControl('')
    });
  }

  isInvalid(campo) {
    const campoForm = this.cadastroFormulario.get(campo);
    return campoForm.invalid && (campoForm.dirty || campoForm.touched);
  }

  salvarContato() {
    this.contatoService
      .buscarContatoPorEmail(this.cadastroFormulario.get('email').value)
      .subscribe(res => {
        res.presentes.push(this.presenteEscolhido);

        //TODO: implementar no back end
        //this.atualizarContato(res);
      }, err => {
        this.cadastrarContato();
      });
  }

  atualizarContato(contato: ContatoModel) {
    this.contatoService
      .atualizar(contato)
      .subscribe(res => {
        this.finalizarComMensagem(new ModalMensagensModel(
          'Mais um presente né?!',
          'Então, segue igualzinho da outra vez, dentro de poucas horas vamos enviar para seu e-mail um boleto com o valor do presente que escolheu.',
          'SUCCESS'
        ));
      }, err => {
        this.gerarMensagemErroGenerica(err);
      });
  }

  cadastrarContato() {
    this.contatoService
      .cadastrar(this.construirContato(this.cadastroFormulario.value))
      .subscribe(res => {
        this.finalizarComMensagem(new ModalMensagensModel(
          'Quase lá!',
          'Dentro de poucas horas vamos enviar para seu e-mail um boleto com o valor do presente que escolheu.',
          'SUCCESS'
        ));
      }, err => {
        this.gerarMensagemErroGenerica(err);
      });
  }

  construirContato(objeto: any) {
    let contato = new ContatoModel();
    contato.nome = objeto.nome;
    contato.email = objeto.email;
    contato.telefone = objeto.telefone;
    contato.presentes = [this.presenteEscolhido];
    return contato;
  }

  finalizarComMensagem(proximaModal: ModalMensagensModel){
    this.activeModal.close('Close click');
    let modal = this.modalService.open(ModalMessagesComponent);
    modal.componentInstance.modal = proximaModal;
  }

  gerarMensagemErroGenerica(err){
    this.finalizarComMensagem(new ModalMensagensModel(
      'Ops... tivemos um problema',
      'Erro: ' + err.error.mensagem,
      'ERROR'
    ));
  }
}