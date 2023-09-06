import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="postModel.title" />
    <button (click)="sendRequest()">Send</button>
  `,
})
export class AppComponent {
  postModel: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  } = {
    userId: 1,
    id: 0,
    title: '',
    completed: false,
  };

  sendRequest() {
    this._http
      .post('https://jsonplaceholder.typicode.com/todos', this.postModel)
      .subscribe((res) => {
        console.log(res);
      });
  }

  constructor(private _http: HttpClient) {}
}
