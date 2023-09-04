import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/" style="cursor: pointer;">C1 Component</a> ||
    <a routerLink="/c2" style="cursor: pointer;">C2 Component</a> ||
    <a routerLink="/c3" style="cursor: pointer;">C3 Component</a>
    <hr />
    <h1>Generic Components</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'generic-table-component';
}
