import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css']
})
export class ModalContatoComponent {

  constructor(private activeModal: NgbActiveModal) {}
}
