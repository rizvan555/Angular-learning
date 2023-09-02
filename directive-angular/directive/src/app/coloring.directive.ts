import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColoring]',
})
export class ColoringDirective {
  constructor(private _el: ElementRef) {
    this._el.nativeElement.style.backgroundColor = 'Yellow';
    this._el.nativeElement.className = 'form-control';
  }

  @HostListener('mouseenter') method() {
    this._el.nativeElement.style.backgroundColor = 'Red';
    this._el.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') method2() {
    this._el.nativeElement.style.backgroundColor = 'yellow';
    this._el.nativeElement.style.color = 'black';
  }
}
