import { AuthService } from 'src/app/service/auth.service';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  nome = environment.nome;
  foto = environment.foto;
  id = environment.id;

  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit() {}

  sair() {
    this.router.navigate(['/entrar']);
    environment.token = '';
    environment.foto = '';
    environment.id = 0;
    environment.tipo = '';
    environment.nome = '';
  }
}
