import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'c1',
    loadChildren: () =>
      import('./components/c1/c1.module').then((m) => m.C1Module),
  },
  {
    path: 'c2',
    loadChildren: () =>
      import('./components/c2/c2.module').then((m) => m.C2Module),
  },
  {
    path: 'c3',
    loadChildren: () =>
      import('./components/c3/c3.module').then((m) => m.C3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
