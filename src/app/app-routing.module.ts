import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletosComponent } from './boletos/boletos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'boletos', component: BoletosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
