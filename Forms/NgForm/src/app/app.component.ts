import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  login(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.resetForm();
    }
  }
}
