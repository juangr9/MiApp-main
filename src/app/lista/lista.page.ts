import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.page.html',
})
export class ListaPage {
  usuarios: any[]=[];

  constructor(private usuarioService: UsuarioService) {}

  ionViewWillEnter() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  eliminarUsuario(correo: string) {
    this.usuarioService.eliminarUsuario(correo);
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }
}
