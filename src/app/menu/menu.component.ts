import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  sair() {
    this.authService.mostrarMenuEmitter.emit(false);
    localStorage.clear();
  }

}
