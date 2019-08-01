import { Component, OnInit } from '@angular/core';
import { PresenteService } from 'src/app/services/presente/presente.service';
import { PresenteModel } from 'src/app/model/presente-model';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.component.html',
  styleUrls: ['./presente.component.css']
})
export class PresenteComponent implements OnInit {

  listaDePresentes: PresenteModel[];
  constructor(public presenteService : PresenteService) { }

  ngOnInit() {
    this.listarTodosPresentes();
  }

  listarTodosPresentes(){
    this.presenteService
      .listarTodosPresentes()
      .subscribe(res => {
        this.listaDePresentes = res.lista;
      },err =>{
        console.log(err);
      });
  }
}
