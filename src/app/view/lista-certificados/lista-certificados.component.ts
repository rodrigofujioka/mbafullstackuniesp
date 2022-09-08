import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-certificados',
  templateUrl: './lista-certificados.component.html',
  styleUrls: ['./lista-certificados.component.css']
})
export class ListaCertificadosComponent implements OnInit {

  public lista = [
    {
      id: '1',
      year:2007,
      cert: 'SCJP 1.5',
    },
    {
      id: '2',
      year:2009,
      cert: 'SCWCD 1.5',
    },
    {
      id: '3',
      year:2011,
      cert: 'CTFL',
    }];
    
  constructor() { }

  ngOnInit(): void {
  }

}
