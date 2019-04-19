import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp(){
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;

    //check whether username or password is null.
    let errorInfo = "";
    if (username == "") {
      errorInfo = "Username cannot be null!\n";
    }
    if (password == "") {
      errorInfo = "Password cannot be null!\n";
    }
    if (phone == "") {
      errorInfo = "Phone number cannot be null!\n";
    }
    if (email == "") {
      errorInfo = "Email cannot be null!\n";
    }
    if (errorInfo == "") {
      alert("Hi "+username+"! Enjoy your cake!");
    }
    else {
      alert(errorInfo);
      return false;
    }

    //connect database here!


    console.log("username: "+username+"\npassword: "+password+"\nphone: "+phone+"\nemail: "+email);
  }

}
