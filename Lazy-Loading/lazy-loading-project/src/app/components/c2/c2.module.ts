import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [C2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: C2Component,
      },
    ]),
  ],
})
export class C2Module {}
