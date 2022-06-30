import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  username:string;
  password:string;
  invalidCreditental:string;
  uname:string;
  test1 = "Antim Yadav";
  array = ['one', 'two', 3, 'four', 5, 6]
  
  userDetails = [
    {
      name : 'aNtim',
      age : 22
    },
    {
      name : 'seemit',
      age : 23
    }
  ];
  email:EmailValidator;
  confirmEmail:EmailValidator;
  succesEmail:string;
  failEmail:string;
  err:string;

  constructor(
    private route: Router

  ) { }

  logInUser(){
    if(this.username === 'admin' && this.password==='admin'){
      console.log(`${this.username} welcome to User Dashboard`)
      this.route.navigate(['/welcome'])
    }
    else{
      console.log(`user is not valid`)
      return this.invalidCreditental = "Wrong username or password";
    }
  }

  isNumber(val: boolean) { 
    return typeof val === 'number'; 
  }

  isString(val: boolean){
    return typeof val === 'string';
  }

verifyemail(){
  if(String(this.email).length<5){
    return this.err = "Enter valid email"
  }
  else if(this.email === this.confirmEmail){
    console.log('Email matched')
  return this.succesEmail = "Email Verified"
  }else{
    console.log("email not matched")
    return this.failEmail = "Email not matched"
  }
}

  ngOnInit(): void {
  }

}
