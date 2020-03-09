import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  @Input() product;
  @Output() addCart = new EventEmitter();
  @Output() changeSize = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addToCart(product) {
    console.log(product);
    this.addCart.emit(product);
  }

  addSize(size) {
    console.log(size);
    this.changeSize.emit(size);
  }

}
