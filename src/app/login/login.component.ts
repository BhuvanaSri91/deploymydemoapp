import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user_password: any;

  // signInForm:FormGroup = new FormGroup ({
  //   'username' : new FormControl(),
  //   'password' : new FormControl()
  // })

  // userInputValues =[];
  
  // onSubmission() {
  //   this.userInputValues = this.signInForm.value
  //   console.log(this.userInputValues)
  // }

}
