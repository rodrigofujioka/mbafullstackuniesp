import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contato-form',
  templateUrl: './cadastro-contato-form.component.html',
  styleUrls: ['./cadastro-contato-form.component.css']
})
export class CadastroContatoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let dados = `
    nome: ${form.value.nome}
    email: ${form.value.email}
    telefone: ${form.value.telefone}
    `;
    console.log(dados);

  }

}
