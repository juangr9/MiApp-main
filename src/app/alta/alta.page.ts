import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-alta',
  templateUrl: 'alta.page.html',
})
export class AltaPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private usuarioService: UsuarioService) {}

  crearUsuario() {
    this.usuarioService.crearUsuario(this.nombre, this.correo, this.contrasena);
    this.nombre = '';
    this.correo = '';
    this.contrasena = '';
  }
}
