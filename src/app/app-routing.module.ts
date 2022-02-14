import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'classic',
    loadChildren: () =>
      import('./classic/classic.module').then((m) => m.ClassicModule),
  },
  {
    path: 'three-level',
    loadChildren: () =>
      import('./three-level/three-level.module').then(
        (m) => m.ThreeLevelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
