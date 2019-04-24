import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //  userList:User[]=[];
  userList: [User];
  testList: any;
  public loggedUser: User;
  public user;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.getProfile();
  }

  //get the user information and send it to database
  signIn() {
    
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

    let match: boolean = false;

    let errorInfo = "";
    //check if the user is in the db
    this.httpClient.get('http://localhost:3000/users/')
      .subscribe(
        (data: [User]) => {
          this.userList = data;
          for (let i = 0; i < data.length; i++) {
            console.log(data[i].UserName + " " + data[i].Password);
            console.log("userlist: " + this.userList[i].UserName);

            //check whether user name and password matched
            if (username == data[i].UserName && password == data[i].Password) {
              match = true;
              this.loggedUser = data[i];

            }

            console.log("out for: " + match);
            //validation for illegal insert
            if (!match) {
              errorInfo = "Your username or password does not match, please try again!";

              //alert
              alert(errorInfo);
              console.log("match before message is false......");
              console.log(sessionStorage.user);
              // sessionStorage.user = undefined;
              return false;
            }
            else if (match) {
              this.router.navigateByUrl("");
              document.getElementById("loginController").style.display = 'none';
              document.getElementById("loggedUser").innerHTML = this.loggedUser.UserName.toString();
              this.httpClient.get("http://localhost:3000/users").subscribe((response) => {
                this.testList = response;
                for (let i = 0; i < this.testList.length; i++) {
                  if (this.testList[i].UserName == username) {
                    console.log(this.testList[i]);
                    var str = JSON.stringify(this.testList[i]);
                    //store the login user to session
                    sessionStorage.user = str;
                    console.log(str);
                    if (sessionStorage.user != null) {
                      console.log(sessionStorage.user);
                      console.log("session:" + JSON.parse(sessionStorage.user)['UserName']);
                    }
                    //edit the loop to judge the login station
                    if (document.getElementById("loginController").style.display = 'none') {
                      document.getElementById("CurrentLogOut").style.display = 'block';
                    }
                  }
                }


              });
            }
          }
        }
      );
  }

}
