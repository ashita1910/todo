import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string = '';

  constructor(private todoService: TodoService) { 
  }

  ngOnInit(): void {}

  createTodo() {
    if(this.todoTitle) {
    const todo = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date()
    }
    this.todoService.createTodo(todo);
    this.todoTitle = '';
  }
}

}
