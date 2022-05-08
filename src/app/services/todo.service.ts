import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: Todo[] = [];

  constructor() { }

  createTodo(todo: Todo) {
    this.todo.push(todo);
  }

  getTodos() {
    return of(this.todo);
  }

  changeTodoStatus(todo: Todo) {
    this.todo.map((singleTodo) => {
      if(singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }

  deleteTodo(todo: Todo) {
    var index = this.todo.findIndex((index) => {
      index.id == todo.id
    });

    this.todo.splice(index, 1);
  }
}
