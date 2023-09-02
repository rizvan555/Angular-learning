import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Currency pipe</h1>
    <input type="text" [(ngModel)]="moneyAzn" (input)="convertEuroToAzn()" />
    <h4>{{ moneyAzn | currency : 'AZN' : 'symbol-narrow' : '1.2-2' }}</h4>
  `,
})
export class AppComponent {
  moneyAzn: number = 0;

  convertEuroToAzn() {}
}
