import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getAllTodo().subscribe((res) => {
      console.log(res);
    })
  }

  addTodo() {
    this.todoService.addTodo();
  }

}
