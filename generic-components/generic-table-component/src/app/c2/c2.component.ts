import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
})
export class C2Component {
  heads: string[] = ['#', 'Name', 'Surname', 'Age'];

  list = [
    {
      id: 1,
      name: 'Rizvan',
      lastname: 'Karimov',
      age: 39,
    },
    {
      id: 1,
      name: 'Kamala',
      lastname: 'Karimova',
      age: 38,
    },
  ];
}
