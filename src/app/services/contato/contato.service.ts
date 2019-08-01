import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) { }
  
}
