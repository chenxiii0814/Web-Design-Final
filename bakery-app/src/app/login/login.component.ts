import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //  userList:User[]=[];
  userList: [User];
  testList:User[]=[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    // console.log(this.firstName); 
    this.httpClient.get('http://localhost:3000/users/')
    .subscribe(
      (data:[User])=>{
        this.userList = data;
        for(let i=0;i<data.length;i++){
          console.log(data[i].UserName + " " + data[i].Password);
          // this.testList.push(data[i]);
          // console.log("testlist: "+this.testList[i]);
          console.log("userlist: "+this.userList[i].UserName);
        }        
      }
    );
    
    //console.log("data:"+this.getProfile.data[])
    // return this.userList;
  }

  signIn(){
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

    //check whether username or password is null.
    let errorInfo = "";
    if (username == "") {
      errorInfo = "Username cannot be null!\n";
    }
    if (password == "") {
      errorInfo = "Password cannot be null!\n";
    }
    if (errorInfo == "") {
      alert("Hi "+username+"! Enjoy your cake!");
    }
    else {
      alert(errorInfo);
      return false;
    }

    //connect database here!


    console.log("username:"+username+" password:"+password);
  }

}
