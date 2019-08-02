import { Component, OnInit } from '@angular/core';
import { PresenteService } from 'src/app/services/presente/presente.service';
import { PresenteModel } from 'src/app/model/presente-model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalContatoComponent } from '../modal-contato/modal-contato.component';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.component.html',
  styleUrls: ['./presente.component.css']
})
export class PresenteComponent implements OnInit {
  closeResult: string;
  listaDePresentes: PresenteModel[];
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
        this.listaDePresentes = res.lista;
      }, err => {
        console.log(err);
      });
  }

  abrirModalCadastro(presente) {
    console.log(presente);
    const modalContato = this.modalService.open(ModalContatoComponent, {centered: true});
    //modalContato.componentInstance.name = 'World'; passar parametro  @Input() name
  }
}
