import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
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
    if (document.getElementById("loginController").style.display = 'block') {
      document.getElementById("CurrentLogOut").style.display = 'none';
    }
  }

  async wait1s() {
    await delay(1000);
  }

  //set the logout style
  logout() {

    console.log(this.comp.loggedUser)
    document.getElementById("loggedUser").style.display = 'none';
    document.getElementById("loginController").style.display = 'block';
    alert("Log out");
    document.getElementById("CurrentLogOut").style.display = 'none';
  }

  viewOrder() {
    this.router.navigateByUrl('userhome')
  }

}
