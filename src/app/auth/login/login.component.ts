import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errServer: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLoginForm() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value)
    .then((res) => {
      this.router.navigate(['/inbox']);
      console.log(res);
    })
    .catch((er) => {
      console.log(er);
      this.errServer = er.message;
    })
  }

}
