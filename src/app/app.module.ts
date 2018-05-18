import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloRoteador } from "./app.routes";
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoModule } from './foto/foto.module';
import { ListagemComponent } from './listagem/listagem.component';
import { PainelModule } from "./painel/painel.module";
import { FotoService } from "./servicos/foto.service";

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule, 
    FotoModule,
    PainelModule,
    ModuloRoteador,
    HttpClientModule,
    FormsModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
