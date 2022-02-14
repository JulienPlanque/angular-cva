import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClassicRoutingModule } from './classic-routing.module';
import { ClassicComponent } from './classic.component';



@NgModule({
  declarations: [
    ClassicComponent
  ],
  imports: [
    CommonModule,
    ClassicRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClassicModule { }
