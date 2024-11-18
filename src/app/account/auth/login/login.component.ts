import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import {Users} from "../../../model/model/general.model";
declare var $: any;

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router, public authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        event => {},
        err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.authService.logout();
          }
        }
      )
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  error = '';
  f: FormGroup;
  u: Users = {
    identifiant: '',
    password: '',
  };

  constructor(public authService: AuthService, public router: Router, public fb: FormBuilder) {

  }

  ngOnInit() {
    const inputs = document.querySelectorAll('.input');
    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add('focus');
    }
    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == '') {
        parent.classList.remove('focus');
      }
    }
    inputs.forEach(input => {
      input.addEventListener('focus', addcl);
      input.addEventListener('blur', remcl);
    });

    this.f = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  onLogin() {
    if (this.f.invalid) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }else{
      this.submitted = true;
      this.u.identifiant = this.f.value.login;
      this.u.password = this.f.value.password;
      this.authService.login(this.u).subscribe(resp => {
        console.log(resp['body']);
        console.log(resp['body']['roles'][0]);
          // if (resp['user'].password_changed === 0) {
          //   // console.log(resp);
          //   localStorage.setItem('id', resp['user'].id);
          //   localStorage.setItem('login', resp['user'].login);
          //   localStorage.setItem('token', resp['token']);
          //   this.router.navigate(['first']);
          // } else {
          this.authService.saveToken(resp['body']['token'], resp['body']['username'], resp['body']['roles'][0], resp['body']['id'], resp['body']['email']);
          this.router.navigate(['pages/super-admin']);
        }
        , error1 => {
          // this.Toast('danger', 'Erreur !', 'Identifiant ou mot de passe incorect!')
          this.error = error1 ? error1 : 'Identifiant ou mot de passe incorect!';
        });
    }
  }
}
