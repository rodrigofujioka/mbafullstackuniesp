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


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    CardPerfilComponent,
    ListaCertificadosComponent,
    ListarCarrosComponent,
    CadastroContatoFormComponent,
    CadastroContatoReativoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
