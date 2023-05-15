import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todoArray:Todo[] = []

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancellare', todoToDelete.title);
    this.todoArray = this.todoArray.filter(todo => todo.title !== todoToDelete.title);
  }

}
