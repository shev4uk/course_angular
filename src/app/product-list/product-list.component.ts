import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild('elSize', {static: false}) elSize: ElementRef;

  products = [
    {
      id: 1,
      name: 'product 1',
      price: 10,
      status: true
    },
    {
      id: 2,
      name: 'product 2',
      price: 20,
      status: false
    },
    {
      id: 3,
      name: 'product 3',
      price: 40,
      status: true
    }
  ];

  count = 0;
  total = 0;
  size: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.dir(this.elSize.nativeElement);
  }

  addCart(product) {
    console.log(product);
    this.count++;
    this.total += product.price; 
  }

  changeSize(size) {
    this.size = size;
    console.log(size);
  }

}
