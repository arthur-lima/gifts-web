import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PresenteModel } from 'src/app/model/presente-model';
import { ContatoModel } from 'src/app/model/contato-model';
import { ContatoService } from 'src/app/services/contato/contato.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent implements OnInit {
  @Input() presenteEscolhido: PresenteModel;
  resumoDescricaoPresente: string;
  cadastroFormulario: FormGroup;
  cadastroFinalizado: boolean;
  msgErro: string;

  constructor(
    public activeModal: NgbActiveModal,
    public contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    this.prepararVariaveis();
    this.criarValidadorFormulario();
  }

  prepararVariaveis() {
    this.resumoDescricaoPresente = this.presenteEscolhido.nome + ' - R$' + this.presenteEscolhido.valor;
  }

  criarValidadorFormulario(){
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

  isInvalid(campo){
    const campoForm = this.cadastroFormulario.get(campo);
    return campoForm.invalid && (campoForm.dirty || campoForm.touched);
  }

  salvarContato() { 
    this.contatoService
      .salvar(this.construirContato(this.cadastroFormulario.value))
      .subscribe(res => {
        this.cadastroFinalizado = true;
      }, err => {
        //TODO: Implementar logo
        console.info(err);
      })
  }

  construirContato(objeto: any){
    let contato = new ContatoModel();
    contato = objeto;
    contato.presenteEscolhido = this.presenteEscolhido;
    return contato;
  }
}
