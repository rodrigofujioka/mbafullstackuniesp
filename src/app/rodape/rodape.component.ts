import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public headerFooter = "Aula MBA FullStack Uniesp";
  public githubUrl = "https://www.iesp.edu.br/";

  constructor() { }

  ngOnInit(): void {
  }

}
