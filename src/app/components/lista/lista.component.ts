import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { ContatoService } from 'src/app/services/contato/contato.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(
    public listaService: ListaService,
    public contatoService: ContatoService
    ) { }

  ngOnInit() {
  }

  sistemaON(){
    this.contatoService
      .sistemaON()
      .subscribe(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
  }

  DB = this.listaService.getListaDePresentes();
}
