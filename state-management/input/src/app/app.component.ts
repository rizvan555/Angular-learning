import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>State Managament-Input</h3>
    <p>
      My name is <strong>{{ myName }}</strong>
    </p>
    <hr />
    <app-exemple [name]="myName"></app-exemple>
  `,
})
export class AppComponent {
  myName: string = 'Rizvan';
}
