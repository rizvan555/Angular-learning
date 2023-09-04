import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css'],
})
export class ExempleComponent {
  @Input() name: string = '';
  @Output() changeNameEvent = new EventEmitter<string>();

  changeName() {
    this.changeNameEvent.emit(this.name);
  }
}
