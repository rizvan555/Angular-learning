import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _cart: CartServiceService) {}
  addToCart() {
    this._cart.cartCount += 1;
  }
}
