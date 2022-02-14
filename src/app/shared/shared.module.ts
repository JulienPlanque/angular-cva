import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChooseQuantityControlConstructorComponent } from './choose-quantity-control-constructor/choose-quantity-control-constructor.component';
import { ChooseQuantityComponent } from './choose-quantity/choose-quantity.component';



@NgModule({
  declarations: [
    ChooseQuantityComponent,
    ChooseQuantityControlConstructorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChooseQuantityComponent,
    ChooseQuantityControlConstructorComponent
  ]
})
export class SharedModule { }
