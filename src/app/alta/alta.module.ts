// alta.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AltaPage } from './alta.page';

@NgModule({
  declarations: [AltaPage],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class AltaPageModule {}
