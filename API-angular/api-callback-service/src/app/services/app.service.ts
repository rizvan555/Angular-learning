import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { GenericHttpService } from './generic-http-service.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: GenericHttpService, private _err: ErrorService) {}

  get(callback: (res: any) => void) {
    this._http.get('todos', (res) => callback(res));
  }

  post(model: any, callback: (res: any) => void) {
    this._http.post('todos', model, (res) => callback(res));
  }
}
