import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Classe, Ecole, FormEcole, Matiere, SuperAdmin} from "../model/model/general.model";

@Injectable({
  providedIn: 'root'
})
export class EcoleService {
  private host: string = 'http://vps107054.serveur-vps.net/gestion_ecole';
  constructor(private http:HttpClient) { }

  getAllEcole(){
    const token =  localStorage.getItem('token');  // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Ecole[]>(`${this.host}/gestion_ecole/ecoles/listeEcoles`, { headers });
  }
  addEcole(ecole: FormEcole){
    const token =  localStorage.getItem('token');  // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Ajoute le token au header Authorization
    });
    return this.http.post(
      this.host+'/gestion_ecole/ecoles/creerEcole',
      ecole,
      { headers }
    );
  }

 modifierEcole(ecole: FormEcole,id){
    const token =  localStorage.getItem('token');  // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Ajoute le token au header Authorization
    });
    return this.http.put(
      this.host+'/gestion_ecole/ecoles/modifierEcole/'+id,
      ecole,
      { headers }
    );
  }

  deleteEcole(nomEcole: string) {
    const token = localStorage.getItem('token'); // Remplace par le token que tu veux utiliser
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Ajoute le token au header Authorization
    });
    return this.http.delete(
      this.host + '/gestion_ecole/ecoles/supprimerEcole/' + nomEcole,
      { headers, observe: 'response' } // Observer la réponse complète
    );
  }


  getAllMatiere(){
    return this.http.get(this.host+'/matiere'+'?token='+localStorage.getItem('token'));
  }

}
