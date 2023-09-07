import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private _http: HttpClient) {}

  get() {
    this._http.get('https://jsonplacehold1er.typicode.com/todos').subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
}
