import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuariosListComponent } from './pages/usuarios-list/usuarios-list.component';
import { UsuariosCreateComponent } from './pages/usuarios-create/usuarios-create.component';


@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
