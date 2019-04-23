import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './../login/login.component';
import { ActivatedRoute, Route, Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[LoginComponent]
})
export class RegisterComponent implements OnInit {
  registeredUser: User;
  userlist;

  constructor(private httpClient: HttpClient, private comp:LoginComponent, private router:Router) { }

  ngOnInit() {
    // this.comp.getProfile();
  }

  signUp() {
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
      //connect database
      this.postProfile();
      console.log(this.registeredUser);
      // console.log("username: " + username + "\npassword: " + password + "\nphone: " + phone + "\nemail: " + email);
      this.router.navigateByUrl("");
      document.getElementById("loginController").style.display = 'none';
      document.getElementById("loggedUser").innerHTML = username;
      this.httpClient.get("http://localhost:3000/users").subscribe((response)=>{
          this.userlist=response;
        for (let i = 0; i < this.userlist.length; i++) {
          if (this.userlist[i].UserName == username) {
            console.log(this.userlist[i]);
            var str = JSON.stringify(this.userlist[i]);

          }
        }
        //set the user to session
        sessionStorage.user=str;
      });

      // alert("Hi "+username+"! Enjoy your cake!");

    } else {
      alert(errorInfo);
      return false;
    }

  }


  postProfile(){
    //send the new user's information to database by set
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
          this.registeredUser = data;
        }
      );
  }
}
