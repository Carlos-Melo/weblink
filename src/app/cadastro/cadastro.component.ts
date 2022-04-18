import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  usuario: Usuario;
  
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private rota: Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    localStorage.clear();
  }

  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpfCnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required]
    })
  }

  validaFormulario(){
    if (this.formulario.invalid){
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsDirty();
      });
    } else{
      this.setarDadosObjeto();
    }
  }

  setarDadosObjeto(){
    this.usuario = {
      nome: this.formulario.get("nome").value,
      cpfCnpj: this.formulario.get("cpfCnpj").value,
      email: this.formulario.get("email").value,
      senha: this.formulario.get("senha").value,
      cep: this.formulario.get("cep").value,
      estado: this.formulario.get("estado").value,
      cidade: this.formulario.get("cidade").value,
      bairro: this.formulario.get("bairro").value,
      rua: this.formulario.get("rua").value,
      numero: this.formulario.get("numero").value,
    }

    this.enviarCadastro();
  }

  enviarCadastro(){
    this.usuarioService.cadastrar(this.usuario)
    .subscribe(
      (data: Usuario) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Cadastro realizado com sucesso!',
          confirmButtonColor: '#2E52F2'
        })
        this.rota.navigate(['login']);
    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Algo deu errado.',
        confirmButtonColor: '#2E52F2'
      })
    }
    )
  }

   // ****************** VALIDAÇÕES ******************

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaTouched(campo) && !this.formulario.valid
    }
  }

  verificaTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).dirty;
  }

}
