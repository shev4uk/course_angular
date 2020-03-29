import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  errServer: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onRegForm() {
    this.auth.registration(this.regForm.value)
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
