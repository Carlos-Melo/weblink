import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BoletosComponent } from './boletos/boletos.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuHomeComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    BoletosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
