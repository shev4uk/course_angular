import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date = new Date();
  directionSort = true;
  searchInput = '';

  products = [
    {
      name: 'product 1',
      price: 30
    },
    {
      name: 'product 2',
      price: 10
    },
    {
      name: 'product 3',
      price: 100
    },
    {
      name: 'product 4',
      price: 5
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  changeSort() {
    this.directionSort = !this.directionSort;
  }

}
