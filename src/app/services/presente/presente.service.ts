import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PresenteModel } from 'src/app/models/presente-model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PresenteService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }

  listarTodosPresentes(){
    return this.http.get<PresenteModel[]>(`${this.apiUrl}presentes`);
  }
}
