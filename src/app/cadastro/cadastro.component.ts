import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

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
          this.router.navigate([''])
        }
      )
    }else{
      this.service.cadastrar(this.foto)
      .subscribe(
        () => {
          this.foto = new FotoComponent()
          this.router.navigate([''])
        }
      ) 
    }
  }

}
