import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Home</a> || <a routerLink="/login">Login</a>
    <h3>Guards</h3>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
