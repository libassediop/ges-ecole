import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from './general.model';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  
  private baseUrl = 'http://{{baseUrl}}/gestion_ecole'; 
  

  constructor(private http:HttpClient) { }

  listeClasses(){
    return this.http.get(this.baseUrl+'/classes'+'/listeClassesParEcoles'+'?token='+localStorage.getItem('token'));
  }
  
}

  

