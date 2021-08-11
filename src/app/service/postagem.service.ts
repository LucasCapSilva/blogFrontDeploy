import { User } from './../model/User';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://bloglucao.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://bloglucao.herokuapp.com/postagens/${id}`,this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{
    return this.http.post<Postagem>('https://bloglucao.herokuapp.com/postagens', postagem,this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://bloglucao.herokuapp.com/postagens', postagem,this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://bloglucao.herokuapp.com/postagens/${id}`,this.token)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://bloglucao.herokuapp.com/usuarios/${id}`,this.token)
  }

}
