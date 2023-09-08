import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [C1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: C1Component,
      },
    ]),
  ],
})
export class C1Module {}
