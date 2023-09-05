import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <app-my-counter></app-my-counter>
    <h1>Current Count: {{ count$ | async }}</h1>
    <h2>My current count: {{ myCount }}</h2>
  `,
})
export class AppComponent {
  count$: Observable<number>;
  myCount: number = 0;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
    this.store.select('count').subscribe((res) => {
      this.myCount = res;
    });
  }
}
