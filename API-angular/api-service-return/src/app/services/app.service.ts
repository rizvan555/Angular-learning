import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) {}

  getMethode() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos');
  }

  postMethode(model: any) {
    return this._http.post('https://jsonplaceholder.typicode.com/todos', model);
  }
}
