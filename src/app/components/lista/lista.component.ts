import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public listaService: ListaService) { }

  ngOnInit() {
  }

  DB = this.listaService.getListaDePresentes();
}
