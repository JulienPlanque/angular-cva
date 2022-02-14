import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeLevelRoutingModule } from './three-level-routing.module';
import { ThreeLevelComponent } from './three-level.component';


@NgModule({
  declarations: [
    ThreeLevelComponent
  ],
  imports: [
    CommonModule,
    ThreeLevelRoutingModule
  ]
})
export class ThreeLevelModule { }
