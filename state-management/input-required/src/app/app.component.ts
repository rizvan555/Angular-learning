import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Input-Required</h1>
    <hr />
    <app-product title="Exemple"></app-product>
  `,
})
export class AppComponent {
  title = 'input-required';
}
