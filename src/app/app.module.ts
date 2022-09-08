import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroContatoReativoComponent } from './view/cadastro-contato-reativo/cadastro-contato-reativo.component';
import { ListaCertificadosComponent } from './view/lista-certificados/lista-certificados.component';
import { ListaFilmeComponent } from './view/lista-filme/lista-filme.component';
import { RodapeComponent } from './view/rodape/rodape.component';
import { ContadorComponent } from './view/contador/contador.component';
import { CardPerfilComponent } from './view/card-perfil/card-perfil.component';
import { ListarCarrosComponent } from './view/listar-carros/listar-carros.component';
import { CadastroContatoFormComponent } from './view/cadastro-contato-template-form/cadastro-contato-form.component';
import { UsuarioService } from './service/usuario.service';
import { UserFormComponent } from './view/user/user-form/user-form.component';
import { UserListComponent } from './view/user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    CardPerfilComponent,
    ListaCertificadosComponent,
    ListarCarrosComponent,
    CadastroContatoFormComponent,
    CadastroContatoReativoComponent,
    UserFormComponent,
    UserListComponent,
    ListaFilmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
