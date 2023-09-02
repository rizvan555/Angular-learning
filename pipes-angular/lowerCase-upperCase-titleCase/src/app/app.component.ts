import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>LowerCase-Uppercase-TitleCase Pipes</h3>
    <input type="text" [(ngModel)]="name" />
    <h4>{{ name | titlecase }}</h4>
  `,
})
export class AppComponent {
  name: string = '';
}
