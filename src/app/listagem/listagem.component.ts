import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos : FotoComponent[]
  
  constructor(private service : FotoService){
    service.listar().subscribe(
        resposta => {
          this.listaFotos = resposta
        }
    )
  }

  ngOnInit() {
  }
  
  remover(foto: FotoComponent){
    this.service.deletar(foto).subscribe(
      resposta => {
        console.log(`Foto ${foto.titulo} apagada!`)
        this.listaFotos = this.listaFotos.filter(function(fotoLista){
          if(foto != fotoLista){
            return fotoLista
          }
        })
      }
    )
  }
}
