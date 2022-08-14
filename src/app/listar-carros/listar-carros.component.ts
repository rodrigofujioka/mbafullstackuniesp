import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.component.html',
  styleUrls: ['./listar-carros.component.css']
})
export class ListarCarrosComponent implements OnInit {
  
  carros: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
