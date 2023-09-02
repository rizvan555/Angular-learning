import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Data Pipes</h1>
    <h4>{{ dataString | date : 'dd.MM.yyyy - HH:mm:ss' }}</h4>
    <input type="datetime-local" [(ngModel)]="testDate" />
  `,
})
export class AppComponent {
  dataString: Date = new Date();
  testDate: string | null = '2023-09-03';
  constructor(private _date: DatePipe) {
    this.testDate = this._date.transform(new Date(), 'yyyy-MM-dd HH:mm');
  }
}
