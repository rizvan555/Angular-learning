import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 appColoring>Coloring</h1>
    <a appMyRouting="/c1" style="cursor:pointer">Compinent 1</a> ||
    <a appMyRouting="/c2" style="cursor:pointer">Compinent 2</a> ||
    <a appMyRouting="/c3" style="cursor:pointer">Compinent 3</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'directive-Angular';
}
