import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  newTodo: Todo = {title:'', priority:1, description: ''}

  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter();


  saveTodo(){
    // const titleInput = document.getElementById('input-title') as HTMLInputElement;
    // const descriptionInput = document.getElementById('input-description') as HTMLInputElement;
    // const priorityInput = document.getElementById('input-priority') as HTMLInputElement;

    // const newTodo: Todo = {title: titleInput.value,
    //                        description: descriptionInput.value,
    //                        priority: parseInt(priorityInput.value)};
    this.todoCreated.emit({...this.newTodo});
  }

}
