import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './../login/login.component';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[LoginComponent]
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient: HttpClient, private comp:LoginComponent, private router:Router) { }

  ngOnInit() {
    // this.comp.getProfile();
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

    //connect database
    this.postProfile();

    console.log("username: "+username+"\npassword: "+password+"\nphone: "+phone+"\nemail: "+email);
  }

  postProfile(){
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;

    this.httpClient.post('http://localhost:3000/users/',
      {
        'UserName': username,
        'Password': password,
        'Phone_number': phone,
        'Email_address': email
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          
        }
      );
  }
}
