import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Component C1</a> ||
    <a routerLink="/c2">Component C2</a> ||
    <a routerLink="/c3">Component C3</a>
    <h1>Generic Components</h1>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'generic-select-component';
}
