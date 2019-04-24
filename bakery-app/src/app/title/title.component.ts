import { Component, Input, OnInit } from '@angular/core';

import { delay } from "rxjs/operators";
import { Router } from '@angular/router';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-title',
  templateUrl: `./title.component.html`,
  styleUrls: [`./title.component.scss`],
  providers: [LoginComponent]
})
export class TitleComponent implements OnInit {

  // loggedUser: User;

  constructor(private router: Router, private comp: LoginComponent) { }

  ngOnInit() {
    if (sessionStorage.user != undefined) {
      console.log(JSON.parse(sessionStorage.user)['UserName']);
    }
    if (document.getElementById("loginController").style.display = 'block') {
      document.getElementById("CurrentLogOut").style.display = 'none';
    }
  }



  //set the logout style
  logout() {
    console.log(this.comp.loggedUser)
    document.getElementById("loggedUser").style.display = 'none';
    document.getElementById("loginController").style.display = 'block';
    alert("Log out");
    document.getElementById("CurrentLogOut").style.display = 'none';
  }

//redirect to user's homepage
  viewOrder(){
    console.log("12345");
    this.router.navigateByUrl('userhome');

  }

}
