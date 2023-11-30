// lista.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaPage } from './lista.page';

@NgModule({
  declarations: [ListaPage],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class ListaPageModule {}
