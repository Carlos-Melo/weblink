import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  cpfCnpj: string;
  mask: string;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.inicializarForm();
  }

  inicializarForm(){
    this.formulario = this.formBuilder.group({
      cpfCnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['', [Validators.required]]
    })
  }

  validarFormulario(){
    if (this.formulario.invalid){
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    } else {
      this.login();
    }
    console.log(this.formulario)
  }

  login(){
    this.cpfCnpj = this.formulario.get("cpfCnpj").value;
    this.usuarioService.login(this.cpfCnpj)
    .subscribe(
      (data: Usuario) => {
        localStorage.setItem('cpfCnpj', this.cpfCnpj);
        this.retornoLogin(data);
    },
    error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Dados não encontrados.',
          confirmButtonColor: '#2E52F2'
        })
    });
  };

  retornoLogin(data){
    if (data.senha === this.formulario.get("senha").value){
      localStorage.setItem('login', 'true');
      this.authService.fazerLogin();
    }
  }

  // ****************** VALIDAÇÕES ******************

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaTouched(campo) && !this.formulario.valid
    }
  }

  verificaTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

}
