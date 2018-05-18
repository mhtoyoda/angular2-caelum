import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor(private service : FotoService) { 
    
  }

  ngOnInit() {
  }

  salvar(){
    this.service.cadastrar(this.foto)
    .subscribe(
      resposta => console.log(resposta),
      erro => console.log(erro)
    )
  }

}
