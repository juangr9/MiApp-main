import { TestBed } from '@angular/core/testing';


import { UsuaraiosService } from './usuario.service';

describe('UsuaraiosService', () => {
  let service: UsuaraiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuaraiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarios: any[] = [];

  crearUsuario(nombre: string, correo: string, contrasena: string) {
    this.usuarios.push({ nombre, correo, contrasena });
    console.log('Usuario creado:', this.usuarios);
  }

  obtenerUsuarios() {
    return this.usuarios;
  }

  eliminarUsuario(correo: string) {
    this.usuarios = this.usuarios.filter((usuario) => usuario.correo !== correo);
    console.log('Usuario eliminado:', this.usuarios);
  }

  validarUsuario(correo: string, contrasena: string): boolean {
    // Lógica para validar el inicio de sesión
    return this.usuarios.some((usuario) => usuario.correo === correo && usuario.contrasena === contrasena);
  }
}
