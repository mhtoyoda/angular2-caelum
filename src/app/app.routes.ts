import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotas : Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:fotoId', component: CadastroComponent},
    {path: '**', redirectTo: ''}
]

export const ModuloRoteador = RouterModule.forRoot(rotas)
