import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { CardPerfilComponent } from './card-perfil/card-perfil.component';
import { ListaCertificadosComponent } from './lista-certificados/lista-certificados.component';
import { ListarCarrosComponent } from './listar-carros/listar-carros.component';
import { CadastroContatoFormComponent } from './cadastro-contato-form/cadastro-contato-form.component';
import { CadastroContatoReativoComponent } from './cadastro-contato-reativo/cadastro-contato-reativo.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ConteudoComponent } from './home/conteudo/conteudo.component';
import { MenuComponent } from './home/menu/menu.component';


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
    HomeComponent,
    ConteudoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
