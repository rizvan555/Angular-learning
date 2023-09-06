import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './services/error.service';

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
    _app.getMethode((res) => {
      console.log(res);
    });
  }

  sendRequest() {
    this._app.postMethode(
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
