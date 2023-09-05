import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  cartCount: number = 0;
  constructor() {}
}
