import { environment } from 'src/environments/environment.prod';
import { TemaService } from './../../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css'],
})
export class TemaEditComponent implements OnInit {
  tema: Tema = new Tema();
  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdTema(id);
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      this.alertas.showAlertInfo('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }
}
