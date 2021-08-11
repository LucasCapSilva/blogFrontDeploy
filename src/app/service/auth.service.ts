import { UserLogin } from './../model/UserLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://backendthiagofaccipieri.herokuapp.com/usuarios/logar',
      userLogin
    );
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(
      'https://backendthiagofaccipieri.herokuapp.com/usuarios/cadastrar',
      user
    );
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(
      `https://backendthiagofaccipieri.herokuapp.com/usuarios/${id}`,
      this.token
    );
  }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }

  adm(){
    let ok: boolean = false;
    if(environment.tipo == 'adm'){
      ok = true
    }
    return ok;
  }
}
