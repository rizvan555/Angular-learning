import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css'],
})
export class ExempleComponent {
  @Input() name: string = '';
}
