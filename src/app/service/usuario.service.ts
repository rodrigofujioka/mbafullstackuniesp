import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { delay, Observable, retry } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioApi: string;

  constructor(private http: HttpClient) {
    this.usuarioApi = 'http://localhost:8080/usuarios';
  }

  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioApi)
    .pipe(
      retry(5),
      delay(10000)
    );
  }

  public save(usuario: Usuario) {
    return this.http.post<Usuario>(this.usuarioApi, usuario)
    .pipe(
      retry(5),
    );;
  }
}

