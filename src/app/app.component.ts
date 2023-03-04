import { Component } from '@angular/core';
import { Todos } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-test';
  todos: Todos[] = [];
  newTodo: string;

  addTodo() {
    if (this.todos) {
      let todo = new Todos();
      todo.name = this.newTodo;
      todo.isComplete = false;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Please enter your todo');
    }
  }

  doneTodo(id: number) {
    this.todos[id].isComplete = !this.todos[id].isComplete;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo, i) => i !== id);
  }
}
