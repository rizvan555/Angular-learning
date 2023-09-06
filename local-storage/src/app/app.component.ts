import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>Local-Storage</h1> `,
})
export class AppComponent {
  constructor() {
    localStorage.setItem('token', 'Helloitsmytoken'); //token elave edirik
    console.log(localStorage.getItem('token')); // consola cixaririq
    localStorage.removeItem('token'); //tokeni silirik
    localStorage.clear(); //localStorage de olanlarin hamisini silir
  }
}
