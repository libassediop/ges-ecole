
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Ecole, Personnel, Professeur, SuperAdmin, UsersFirstCon} from "../model/model/general.model";



@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {

  private host: string = 'http://vps107054.serveur-vps.net/gestion_ecole';
  constructor(private http: HttpClient) {
  }

 updateSuperadmin(superadmin: SuperAdmin,id){

    console.log(superadmin)
   console.log(id)
    const token =  localStorage.getItem('token');  // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Ajoute le token au header Authorization
    });
    return this.http.put(
      this.host+'/gestion_ecole/users/modifierUser/'+id,
      superadmin,
      { observe: 'response', headers }
    );
  }

  addSuperadmin(superadmin: SuperAdmin){
    const token =  localStorage.getItem('token');  // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Ajoute le token au header Authorization
    });
    return this.http.post(
      this.host+'/gestion_ecole/auth/signup',
      superadmin,
      { observe: 'response', headers: headers }
    );
  }

  delete(id){
    const token = localStorage.getItem('token'); // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Ajoute le token au header Authorization
    });
    return this.http.delete(
      this.host + '/gestion_ecole/users/supprimerUser/' + id,
      { headers, observe: 'response' } // Observer la réponse complète
    );
  }

  getAllSuperAdmin(){
    const token =  localStorage.getItem('token');  // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SuperAdmin[]>(`${this.host}/gestion_ecole/users/listeSuperAdmin`, { headers });

  }

}
