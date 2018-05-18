import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent

  constructor(private service : FotoService,
              private rotaAtiva : ActivatedRoute,
              private router : Router) { 
    
  }

  ngOnInit() {
    this.rotaAtiva.params.subscribe(
      parametro => {
        if(parametro.fotoId){
          this.service.consultar(parametro.fotoId)
                   .subscribe(fotoApi => this.foto = fotoApi)
        }
      }
    )
  }

  salvar(){
    if(this.foto._id){
      this.service.alterar(this.foto)
      .subscribe(
        () => {
          this.mensagem.texto = `Foto ${this.foto.titulo} alterada com sucesso!`
          this.mensagem.tipo = 'info'
          setTimeout(() =>{
            this.router.navigate([''])
          }, 3000)
        }
      )
    }else{
      this.service.cadastrar(this.foto)
      .subscribe(
        mensageApi => {
          this.mensagem = mensageApi
          this.foto = new FotoComponent()
          setTimeout(() =>{
            this.router.navigate([''])
          }, 3000)
        },
        erro => {
          this.mensagem.texto = `Ops algo deu errado ${erro}`
          this.mensagem.tipo = 'danger'
        }
      ) 
    }
  }

}
