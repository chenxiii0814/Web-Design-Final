import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //  userList:User[]=[];
  userList: [User];
  testList: User[] = [];
  loggedUser:User;

  constructor(private httpClient: HttpClient, private router:Router) { }

  ngOnInit() {
    // this.getProfile();
  }


  signIn() {
    
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

    let match: boolean = false;

    let errorInfo = "";
  
    this.httpClient.get('http://localhost:3000/users/')
      .subscribe(
        (data: [User]) => {
          this.userList = data;
          for (let i = 0; i < data.length; i++) {
            console.log(data[i].UserName + " " + data[i].Password);
            // this.testList.push(data[i]);
            // console.log("testlist: "+this.testList[i]);
            console.log("userlist: " + this.userList[i].UserName);

            if (username == data[i].UserName && password == data[i].Password) {
              match = true;
              this.loggedUser = data[i];
            }

            console.log("out for: " + match);
            if (!match) {
              errorInfo = "Your username or password does not match, please try again!"
              console.log("match before message is false......")
            }else{
              this.router.navigateByUrl("");
              document.getElementById("loginController").style.display='none';
              document.getElementById("loggedUser").innerHTML=this.loggedUser.UserName.toString();
            }


          }
          console.log("out for2: " + match);

          // if (errorInfo == "") {
          //   alert("Hi " + username + "! Enjoy your cake!");
          // }
          // else {
          //   alert(errorInfo);
          //   return false;
          // }
        }
      );
    console.log("out for3: " + match);
  }

}
