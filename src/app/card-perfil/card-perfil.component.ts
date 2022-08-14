import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {

public urlImage = "https://prod-spinneys-cdn.azureedge.net/static/img/no-image-found.b1edc35f0fa6.png";
public nomeCard = "Rodrigo Fujioka"
public descricaoCard = "Descrição de um Card MBA"
public exibeImagem = false;

  constructor() { }

  ngOnInit(): void {
  }

  exibirImage(){
   this.exibeImagem = true;
  }

  ocultarImage(){
    this.exibeImagem = false;    
  }


}
