import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient, private _err: ErrorService) {}

  getMethode(callback: (res: any) => void) {
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      },
    });
  }

  postMethode(model: any, callback: (res: any) => void) {
    this._http
      .post('https://jsonplaceholder.typicode.com/todos1', model)
      .subscribe({
        next: (res: any) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          this._err.errorHandler(err);
        },
      });
  }
}
