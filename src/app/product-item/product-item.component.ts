import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() userName;

  disable = false;
  price = 0;
  options = ['s', 'm', 'l'];
  amount = 1;

  constructor() { }

  ngOnInit() {
    console.log(this.userName);
  }

  addToCart(id: number) {
    console.log(id);
  }

  selectSize(size: string) {
    console.log(size);
  }

  changeQuantity(quantity: string) {
    console.log(quantity);
  }

  increase() {
    this.amount = +this.amount + 1;
  }

  decrease() {
    if(this.amount > 1) {
      this.amount = +this.amount - 1;
    }
  }

}
