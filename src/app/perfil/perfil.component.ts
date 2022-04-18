import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  formulario: FormGroup;
  cpfCnpj: string = localStorage.getItem('cpfCnpj');
  usuario: Usuario;
  idUsuario: number;
  
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.renderizarPerfil();
    this.inicializarFormulario();
  }

  renderizarPerfil(){
    this.usuarioService.login(this.cpfCnpj).subscribe({
      next: (data) => {
        this.setarDadosFormulario(data);
        this.idUsuario = data.id;
      },
      error: err => console.log('Erro', err)
    })
  }

  setarDadosFormulario(data) {
    this.formulario.get("nome").setValue(data.nome);
    this.formulario.get("cpfCnpj").setValue(data.cpfCnpj);
    this.formulario.get("email").setValue(data.email);
    this.formulario.get("senha").setValue(data.senha);
    this.formulario.get("cep").setValue(data.cep);
    this.formulario.get("estado").setValue(data.estado);
    this.formulario.get("cidade").setValue(data.cidade);
    this.formulario.get("bairro").setValue(data.bairro);
    this.formulario.get("rua").setValue(data.rua);
    this.formulario.get("numero").setValue(data.numero);
  }

  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
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

  validarFormulario(){
    if (this.formulario.invalid){
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsDirty();
      });
    } else {
      this.setarDadosObjeto();
    }
  }

  setarDadosObjeto(){
    this.usuario = {
      id: this.idUsuario,
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

    this.enviarEdit();
  }

  enviarEdit(){
    this.usuarioService.editar(this.usuario)
    .subscribe(
      (data: Usuario) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Edição realizado com sucesso!',
          confirmButtonColor: '#2E52F2'
        })
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

}
