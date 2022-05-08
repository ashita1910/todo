import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] | undefined;
  faTrashAlt = faTrashAlt;

  constructor(private todoService: TodoService) { 
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  updateTodoStatus(todo: Todo) {
    this.todoService.changeTodoStatus(todo);
  }

}
