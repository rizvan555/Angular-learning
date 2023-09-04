import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>TodoList</h1>
    <input type="text" [(ngModel)]="work" />
    <button (click)="addTodo()">Save</button>
    <hr />
    <app-todo-list [todos]="todos"></app-todo-list>
  `,
})
export class AppComponent {
  work: string = '';
  todos: string[] = [];

  addTodo() {
    this.todos.push(this.work);
    this.work = '';
  }
}
