import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { Store } from '@ngrx/store';
import { addUser } from './users.action';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="user.name" />
    <input type="text" [(ngModel)]="user.lastName" />
    <button (click)="addUser()">Send</button>
    <app-users></app-users>
  `,
})
export class AppComponent {
  user: UserModel = new UserModel();

  constructor(private store: Store) {}

  addUser() {
    this.store.dispatch(addUser({ user: this.user }));
    this.user = new UserModel();
  }
}
