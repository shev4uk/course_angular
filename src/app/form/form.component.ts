import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formTest: FormGroup;

  get f() { 
    return this.formTest.controls;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formTest = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      check: [false, [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.formTest.value);
  }

}
