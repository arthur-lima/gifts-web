import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMensagensModel } from 'src/app/models/modal-mensagens-model';

@Component({
  selector: 'app-modal-messages',
  templateUrl: './modal-messages.component.html',
  styleUrls: ['./modal-messages.component.css']
})
export class ModalMessagesComponent implements OnInit {
  @Input() modal: ModalMensagensModel;
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
