import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = ['task 1', 'task 2', 'task 3'];

  constructor() { }

  ngOnInit() {
  }

  removeTask(i) {
    console.log(i);
    this.tasks.splice(i, 1);
  }

}
