import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeLevelComponent } from './three-level.component';

const routes: Routes = [{ path: '', component: ThreeLevelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeLevelRoutingModule { }
