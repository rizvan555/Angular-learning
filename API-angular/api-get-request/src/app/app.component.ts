import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent {
  constructor(private _http: HttpClient) {
    this._http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
