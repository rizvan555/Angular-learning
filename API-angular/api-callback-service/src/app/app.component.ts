import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="title" />
    <button (click)="sendRequest()">SendRequest</button>
  `,
})
export class AppComponent {
  title: string = '';

  constructor(private _app: AppService) {
    _app.get((res) => {
      console.log(res);
    });
  }

  sendRequest() {
    this._app.post(
      {
        userId: 1,
        id: 0,
        title: this.title,
        completed: false,
      },
      (res) => {
        console.log(res);
      }
    );
  }
}
