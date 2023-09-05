import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public _cart: CartServiceService) {}
}
