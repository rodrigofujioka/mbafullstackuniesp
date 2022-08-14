import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contato-reativo',
  templateUrl: './cadastro-contato-reativo.component.html',
  styleUrls: ['./cadastro-contato-reativo.component.css']
})
export class CadastroContatoReativoComponent implements OnInit {

   formularioCadastro : FormGroup;

  constructor() {
    this.formularioCadastro = new FormGroup(
      {
        nome : new FormControl(null, Validators.required),
        email : new FormControl(null,  
            [Validators.maxLength(10), Validators.required, Validators.email]),
        telefone : new FormControl(null, Validators.required),
      }
    )    
   }

  ngOnInit(): void {
  }

 salvar(){
  let dados = `
    nome: ${this.formularioCadastro.value.nome}
    email: ${this.formularioCadastro.value.email}
    telefone: ${this.formularioCadastro.value.telefone}
  `
  console.log(dados);
 }


}
