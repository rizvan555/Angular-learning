import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router) {}

  checkIsAuth() {
    if (localStorage.getItem('token')) return true;
    this._router.navigateByUrl('/login');
    return false;
  }
}
