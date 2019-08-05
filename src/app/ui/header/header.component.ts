import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isServiceOnline(){
    this.sharedService
      .isServiceOnline()
      .subscribe(res => {
        console.info('Serviço on');
        console.info(res);
      }, err =>{
        console.error('Serviço off');
        console.error(err);
      });
  }
}
