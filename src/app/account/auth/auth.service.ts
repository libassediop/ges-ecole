import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Users} from "../../model/model/general.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  value: Users;
  private host: string = 'http://vps107054.serveur-vps.net/gestion_ecole';
  isLoggedIn = false;
  role: number;

  // store the URL so we can redirect after logging in
  redirectUrl: string;  constructor(private myRoute: Router , private http: HttpClient, public router: Router) { }

  updatePasswordUser(id,newpassword){
    return this.http.put(
      this.host
      + '/user/updatePasswordUserNewConnexion/'
      + id + '?password=' + newpassword+'&token='+localStorage.getItem('token'),
      { observe : 'response'});
  }

  login(value: Users) {
    console.log(value)
    return this.http.post(
      this.host + '/gestion_ecole/auth/signin/admin',
      value,  // Envoie `value` (qui contient username et password) dans le corps de la requête
      { observe: 'response' }
    );
  }




  saveToken(jwt: string,username: string, role: string, id: number,email: string) {
    localStorage.setItem('token', jwt);
    localStorage.setItem('username', username);
    localStorage.setItem('role',role);
    localStorage.setItem('email',email);
   // this.role = typeUser;
    localStorage.setItem('id', String(id));
    this.isLoggedIn = true;
  }



  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('login');
    localStorage.removeItem('typeUser');
    localStorage.removeItem('etat');
    localStorage.removeItem('id');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
  logout2(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    localStorage.removeItem('prenom');
    localStorage.removeItem('typeUser');
    this.isLoggedIn = false;
    this.router.navigate(['firstConnexion']);
  }
  sendToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedInn() {
    return this.getToken() !== null;
  }

}
