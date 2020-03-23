import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  deleteProductSubject = new Subject();
  viewCatalog = new BehaviorSubject('list');

  products: Product[] = [
    {
      name: 'Product 1',
      price: 25
    },
    {
      name: 'Product 2',
      price: 35
    },
    {
      name: 'Product 3',
      price: 5
    }
  ];
  
  // get products() {
  //   return this._products;
  // }

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    console.log(product);
    this.products.push(product);
  }

  deleteProduct(id) {
    this.products.splice(id, 1);
    this.deleteProductSubject.next(1);
  }

}
