import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component {
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
      name: 'Fateh',
      lastname: 'Karimov',
      age: 14,
    },
  ];
}
