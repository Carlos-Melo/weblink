import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin() {
    this.usuarioAutenticado = true;
    this.mostrarMenuEmitter.emit(true);
    this.router.navigate(['/inicio']);
  }
}
