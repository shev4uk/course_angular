import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;

  get form() {
    return this.regForm.controls;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    // this.regForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required]),
    // });
  }

  regUser() {
    console.log(this.regForm.value);
  }

}
