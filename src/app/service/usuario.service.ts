import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, delay, Observable, retry, throwError } from 'rxjs';
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
      catchError(this.handleError)
    );
  }

  public save(usuario: Usuario) {
    return this.http.post<Usuario>(this.usuarioApi, usuario)
    .pipe(
      retry(5),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
  
    let errorMessage = '' ;

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
      console.log(errorMessage, 'Erro do lado do Cliente');
      window.alert(errorMessage);
    }else{
      errorMessage = `Código do erro ${error.status}, ` + `menssagem: ${error.message}`;
      console.log(errorMessage, 'Erro do lado do servisor');
      window.alert(errorMessage); 
    }

    console.log(errorMessage);
    return throwError(errorMessage);

  }

}



