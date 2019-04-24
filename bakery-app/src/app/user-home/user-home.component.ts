import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {User} from "../user";

@Component({
  selector: 'app-user-home',
  templateUrl: `./user-home.component.html`,
  styleUrls: [`./user-home.component.scss`]
})
export class UserHomeComponent implements OnInit {
  username: String;
  private orderList;

  user = JSON.parse(sessionStorage.user);
  public userN = this.user["UserName"];
  private userP = this.user["Phone_number"];
  private userE = this.user["Email_address"];
  private newUser: User;

  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.username=params.username);
  }
//the user can change name,email and phone
  editInformation() {

    let name = document.getElementById("changename").innerText;
    let phone = document.getElementById("changepho").innerText;
    let email = document.getElementById("changeeml").innerText;
      this.newUser = JSON.parse(sessionStorage.user);
      // this.http.delete('http://localhost:3000/users/')
      //   .subscribe(data => { console.log("delete!",data);sessionStorage.user=data},);
      this.newUser.UserName = name;
      this.newUser.Email_address = email;
      this.newUser.Phone_number = phone;
      let password = this.newUser["Password"];
    console.log(this.newUser);
    sessionStorage.user=JSON.stringify(this.newUser);
    this.http.post('http://localhost:3000/users/',
      {
        'UserName': name,
        'Password': password,
        'Phone_number': phone,
        'Email_address': email
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.newUser = data;
        }
      );
  }


//get the order by user's password
  getOrder(){
    let orderShow = "<div class='oderShow'>";
    let userNow = JSON.parse(sessionStorage.user)["Password"];
    console.log("kakakaka"+userNow);
    this.http.get('http://localhost:3000/orders').subscribe((response)=>{
      this.orderList = response;
      for(let i=0;i<this.orderList.length;i++){
        let order=this.orderList[i];
        let orderU = order["User"];
        let orderP = orderU["Password"];
        let orderName = orderU["UserName"];
        let orderItems = order["Item"];
        // console.log(orderName);
        if(orderP==userNow){
          orderShow+='<div class="orderId111">OrderID :'+order["OrderID"]+'<p class="ord">ITEM:'+orderItems["ItemName"]+'</p>';
        }
      }document.getElementById("showList").innerHTML=orderShow;
    })
  }

}
