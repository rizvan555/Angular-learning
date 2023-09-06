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

  constructor(private _http: HttpClient) {
    //Bu "headers" qismi sirf authorizasiya ve ya token elave etmek ücün yazilir.Bunu yazandan sonra asagida da elave etmeyi unutma
    let headers = {
      headers: { authorization: 'My Name Is Rizvan' },
    };

    this._http
      .get('https://jsonplaceholder.typicode.com/todos', headers)
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
