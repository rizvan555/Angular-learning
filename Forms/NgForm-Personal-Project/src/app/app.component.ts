// Updated Component Code
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: any[] = [];
  currentDate: string;

  constructor(private _date: DatePipe) {
    this.currentDate = this._date.transform(new Date(), 'yyyy-MM-dd');
  }

  save(form: NgForm) {
    if (form.valid) {
      this.employees.push(form.value);
      form.resetForm();
    }
  }

  delete(index: number) {
    this.employees.splice(index, 1);
  }
}
