import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouting]',
})
export class MyRoutingDirective {
  @Input() appMyRouting: string = '';
  constructor(
    private _el: ElementRef<HTMLLinkElement>,
    private _router: Router
  ) {}

  @HostListener('click') clickMethod() {
    this._router.navigateByUrl(this.appMyRouting);
  }
}
