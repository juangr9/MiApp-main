import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
})
export class GaleriaPage {
  imagenes: any[] = [
    { url: 'ruta_de_la_imagen_1.jpg', descripcion: 'Descripción 1' },
    { url: 'ruta_de_la_imagen_2.jpg', descripcion: 'Descripción 2' },
    // Agrega más imágenes según sea necesario
  ];
}
