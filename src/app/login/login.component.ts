import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    login: '',
    password: ''
  };

  product = {
    name: '',
    amount: ''
  }

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.user);
  }

  addProduct() {
    console.log(this.product);
  }

}
