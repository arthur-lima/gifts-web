import { Component, OnInit } from '@angular/core';
import { PresenteService } from 'src/app/services/presente/presente.service';
import { PresenteModel } from 'src/app/models/presente-model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalContatoComponent } from '../modal-contato/modal-contato.component';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.component.html',
  styleUrls: ['./presente.component.css']
})
export class PresenteComponent implements OnInit {
  closeResult: string;
  listaDePresentes: PresenteModel[];
  modalContato: NgbModalRef;


  constructor(
    public presenteService: PresenteService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.listarTodosPresentes();
  }

  listarTodosPresentes() {
    this.presenteService
      .listarTodosPresentes()
      .subscribe(res => {
        this.listaDePresentes = res;
      }, err => {
        console.log(err);
      });
  }

  abrirModalCadastro(presente) {    
    this.modalContato = this.modalService.open(ModalContatoComponent, {centered: true});
    this.modalContato.componentInstance.presenteEscolhido = presente;
  }
}
