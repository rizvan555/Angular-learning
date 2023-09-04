import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Output</h3>
    <p>
      My name is <strong>{{ myName }}</strong>
    </p>
    <hr />
    <app-exemple
      [name]="myName"
      (changeNameEvent)="changeMyName($event)"
    ></app-exemple>
  `,
})
export class AppComponent {
  myName: string = 'Rizvan';
  changeMyName(event: string) {
    this.myName = event;
  }
}
