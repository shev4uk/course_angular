import { Component } from '@angular/core';

enum ResponseCode {
    Ok = 200,
    Redirect = 301,
    NotFound = 404
}

type Admin = {
  name: string,
  password: string,
  role: number,
  age?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'course';
  number: number;
  arr: number[] = [1, 5, 10];
  user: {name: string, age: number} = {
    name: 'Bob',
    age: 23
  }; 
  admin: Admin = {
    name: 'Admin',
    password: '123',
    role: 777
  }
  private readonly code: ResponseCode = ResponseCode;

  ngOnInit() {
    this.changeString();
    this.number = 10;

    console.log(this.code.Ok);
    console.log(this.code[200]);
  }

  changeString(): string {
    return 'string';
  }

  private privateMethod() {
    this.number = 25;
  }
}
