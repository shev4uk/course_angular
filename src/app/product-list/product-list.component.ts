import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  formAddProduct: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
    // console.log(this.products);
    this.formAddProduct = this.fb.group({
      name: [''],
      price: ['']
    })
  }

  onAddProduct() {
    this.dataService.addProduct(this.formAddProduct.value);
  }

  deleteProduct(id) {
    this.dataService.deleteProduct(id);
  }

}
