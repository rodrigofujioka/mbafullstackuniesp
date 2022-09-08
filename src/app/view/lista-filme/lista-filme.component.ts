import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {

  listaFilmes:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

      this.http.get(url).subscribe((data:any) => {
        console.log(data)
        this.listaFilmes = data.results;
      })

  }




}
