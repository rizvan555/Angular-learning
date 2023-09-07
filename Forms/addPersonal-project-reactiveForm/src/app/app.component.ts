import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  employees: Employee[] = [];

  constructor(private _date: DatePipe) {}

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startingDate: new FormControl(
        this._date.transform(new Date(), 'yyyy-MM-dd'),
        [Validators.required]
      ),
      department: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  saveInfos() {
    if (this.addForm.valid) {
      this.employees.push(this.addForm.value);
      this.addForm.reset();
      this.addForm.controls['startingDate'].setValue(
        this._date.transform(new Date(), 'www-MM-dd')
      );
    }
  }

  cleanInfos(index: number) {
    this.employees.splice(index, 1);
  }
}

class Employee {
  name: string = '';
  department: string = '';
  startingDate: string = '';
}
