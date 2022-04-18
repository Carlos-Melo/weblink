import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  cadastrar(dados: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}/usuarios`, dados);
  }

  login(cpfCnpj: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/usuarios/${cpfCnpj}`);
  }

  editar(dados: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/usuarios/${dados.id}`, dados)
  }
}
