import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
