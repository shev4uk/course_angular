import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Course';
  counter = 1;
  stateDropDown = false;
  products = [
    {
      id: 1,
      name: 'product 1',
      price: 36
    },
    {
      id: 2,
      name: 'product 2',
      price: 46
    },
    {
      id: 3,
      name: 'product 3',
      price: 31
    }
  ]

  changeTitle() {
    this.title = 'Lesson';
  }

  incrementCounter() {
    this.counter++;
  }

  toggleDropDown() {
    this.stateDropDown = !this.stateDropDown;
  }
}
