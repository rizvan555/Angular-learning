import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}

  getMethode(callback: (res: any) => void) {
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  postMethode(model: any, callback: (res: any) => void) {
    this._http
      .post('https://jsonplaceholder.typicode.com/todos', model)
      .subscribe({
        next: (res: any) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }
}
