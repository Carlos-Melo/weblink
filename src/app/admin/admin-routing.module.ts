import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosCreateComponent } from './pages/usuarios-create/usuarios-create.component';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';

const routes: Routes = [
  { path: 'cadastro-usuario', component: UsuariosCreateComponent },
  { path: 'lista-usuario', component: UsuariosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
