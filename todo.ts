import {Component, View, bootstrap, For} from 'angular2/angular2';
import {CreditComponent} from './credits';

@Component({
  selector: 'todolist',
})
@View({
  template: `
  <h3>Todos</h3>
  <ul>
    <li *for="#todo of todos">{{ todo }}</li>
  </ul>
  <input #todotext (keyup)="doneTyping($event)">
  <button (click)="addTodo(todotext.value)">Add</button>

  <credit></credit>
  `,
  directives: [For, CreditComponent]
})

class TodoListComponent {
  todos: Array<string>;

  constructor() {
    this.todos = ["Get well", "Drink Matcha Latte"];
  }

  addTodo(todo: String) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    if ($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(TodoListComponent);
