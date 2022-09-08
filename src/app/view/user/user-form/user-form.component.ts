import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  usuario: Usuario;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.usuarioService.save(this.usuario).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/usuarios']);
  }
}
