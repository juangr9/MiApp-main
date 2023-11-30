import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  correo: string = '';
  contrasena: string = '';

  constructor(private usuarioService: UsuarioService) {}

  iniciarSesion() {
    const usuarioValido = this.usuarioService.validarUsuario(this.correo, this.contrasena);

    if (usuarioValido) {
      // Redirige a la página principal
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
