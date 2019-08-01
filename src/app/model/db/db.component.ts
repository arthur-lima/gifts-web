import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DBComponent implements OnInit {
  constructor() { }
  
  

  ngOnInit() {
    this.initializeDBObjetc();
  }

  //Deletar este componente
  initializeDBObjetc(){

  }

  static getDB(){

  }
}
