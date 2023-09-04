import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css'],
})
export class C3Component {
  heads: string[] = ['#', 'Name', 'Surname', 'Age'];
  list = [
    {
      id: 1,
      name: 'Kamala',
      lastname: 'Karimova',
      age: 38,
    },
    {
      id: 1,
      name: 'Fatima',
      lastname: 'Karimova',
      age: 15,
    },
  ];
}
