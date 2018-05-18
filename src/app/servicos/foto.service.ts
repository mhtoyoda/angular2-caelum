import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { map } from "rxjs/operators";
import { MensagemComponent } from "../mensagem/mensagem.component";

@Injectable()
export class FotoService{
    
    url = 'http://localhost:3000/v1/fotos/'

    cabecalho = {
        headers: new HttpHeaders({'Content-Type' :'application/json'})
        //cabecalho.append('Content-Type', 'application/json')
    }

    constructor(private httpClient : HttpClient){}

    listar() : Observable<FotoComponent[]>{
        return this.httpClient.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto : FotoComponent) : Observable<MensagemComponent>{
        return this.httpClient.post(this.url, foto, this.cabecalho)
        .pipe( map( () => {
            let mensagem = new MensagemComponent()
            mensagem.texto = `Foto ${foto.titulo} cadastrada com sucesso!`
            mensagem.tipo = 'success'
            return mensagem
        })
        );
    }

    deletar(foto : FotoComponent) : Observable<FotoComponent[]>{
        return this.httpClient.delete<FotoComponent[]>(this.url+foto._id);
    }

    consultar(fotoId: string) : Observable<FotoComponent> {
        return this.httpClient.get<FotoComponent>(this.url+fotoId)
    }

    alterar(foto : FotoComponent): Observable<FotoComponent> {
        return this.httpClient.put<FotoComponent>(this.url+foto._id, foto)
    }
}