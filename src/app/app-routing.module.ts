import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ListaFilmeComponent } from './view/lista-filme/lista-filme.component';
import { ContadorComponent } from './view/contador/contador.component';
import { CadastroContatoFormComponent } from './view/cadastro-contato-template-form/cadastro-contato-form.component';
import { UserListComponent } from './view/user/user-list/user-list.component';
import { UserFormComponent } from './view/user/user-form/user-form.component';
import { AdminGuard } from './admin.guard';

const appRoutes : Routes = [

  { path: 'contador' , component: ContadorComponent, canActivate:[AdminGuard]},
  { path: 'cadastro-contato' , component: CadastroContatoFormComponent},
  { path: 'lista-filme' , component: ListaFilmeComponent},
  { path: 'usuarios', component: UserListComponent },
  { path: 'incluirUsuario', component: UserFormComponent, canActivate:[AdminGuard] }

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
