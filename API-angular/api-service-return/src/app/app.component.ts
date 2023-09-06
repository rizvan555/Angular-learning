import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: ` <input type="text" [(ngModel)]="title" />
    <button (click)="sendPost()">Send Post</button>`,
})
export class AppComponent {
  title: string = '';

  constructor(private _app: AppService) {
    this._app.getMethode().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
  sendPost() {
    this._app
      .postMethode({
        userId: 1,
        id: 0,
        title: this.title,
        completed: false,
      })
      .subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }
}
