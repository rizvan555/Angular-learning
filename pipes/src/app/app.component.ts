import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Pipes</h1>
    <input [(ngModel)]="mySearch" type="text" />
    <ul>
      <!-- <li *ngFor="let name of names | namePipe : mySearch">{{ name }}</li> -->
      <li *ngFor="let user of users | namePipe : mySearch">
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  mySearch: string = '';
  // names: string[] = ['Rizvan', 'Kemale', 'Fatima', 'Fateh'];
  users: {
    name: string;
    age: number;
  }[] = [
    {
      name: 'Rizvan',
      age: 39,
    },
    {
      name: 'Kemale',
      age: 38,
    },
    {
      name: 'Fatima',
      age: 15,
    },
    {
      name: 'Fateh',
      age: 14,
    },
  ];
}
