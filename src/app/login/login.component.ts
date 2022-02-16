import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageData: any;
  finalData: any;
  // newList = true;
  test = '';
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private router: Router, private shared: SharedService) { }
  ngOnInit(): void {
  }
  onLogin() {
    if (this.form.value.email && this.form.value.password) {
      this.router.navigate(['image'])
      // this.newList = true;
      this.messageData = this.form.value.email;
      this.finalData = sessionStorage.setItem('email', this.messageData)
      this.finalData = this.shared.setMessage(this.form.value.email)
      console.log(sessionStorage)
    } else {
      alert('please enter the password ')
      this.form.reset();
    }
  }
}



