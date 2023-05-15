import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  // @Input() todoArray:Todo[] = []

  _todoArray: Todo[] = [];

  @Input() set todoArray(value: Todo[]){
    this._todoArray = value;
    this._todoArray.sort((todo1, todo2) => todo2.priority - todo1.priority)
  }

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancellare', todoToDelete.title);
    this._todoArray = this._todoArray.filter(todo => todo.title !== todoToDelete.title);
  }

}
