import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { CadastroContatoFormComponent } from './cadastro-contato-form/cadastro-contato-form.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  {path: '' , component: HomeComponent},
  {path: 'contador' , component: ContadorComponent},
  {path: 'cadastro-contato' , component: CadastroContatoFormComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
