import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contadorcomponent } from './contador/contador.component';



@NgModule({
  declarations: [
    Contadorcomponent
  ],
  exports: [
    Contadorcomponent
  ]
})
export class ContadorModule { }
