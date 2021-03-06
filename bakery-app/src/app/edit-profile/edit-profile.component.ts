import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from "../user";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  username: String;
  private orderList;
//read user' info from session
  user = JSON.parse(sessionStorage.user);
  public userN = this.user["UserName"];
  public userP = this.user["Phone_number"];
  public userE = this.user["Email_address"];
  public newUser: User;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);
  }

  //go back to last page
  goBack() {
    history.go(-1);
  }
  
  //the user can change name,email and phone
  editInformation() {
    //get the edited user information
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
    //store new user into session and database
    sessionStorage.user = JSON.stringify(this.newUser);
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
  getOrder() {
    let orderShow = "<div class='oderShow'>";
    let userNow = JSON.parse(sessionStorage.user)["Password"];
    console.log("kakakaka" + userNow);
    this.http.get('http://localhost:3000/orders').subscribe((response) => {
      this.orderList = response;
      for (let i = 0; i < this.orderList.length; i++) {
        let order = this.orderList[i];
        let orderU = order["User"];
        let orderP = orderU["Password"];
        let orderName = orderU["UserName"];
        let orderItems = order["Item"];
        // console.log(orderName);
        if (orderP == userNow) {
          orderShow += '<div class="orderId111">OrderID :' + order["OrderID"] + '<p class="ord">ITEM:' + orderItems["ItemName"] + "&nbsp"+"&nbsp"+ order.Item["Price"] + '</p>';
        }
      } document.getElementById("showList").innerHTML = orderShow;
    })
  }

  getUserProfile() {
    if (document.getElementById("profile").style.display = 'none') {
      document.getElementById("profile").style.display = 'block';;
    } else {
      document.getElementById("profile").style.display = 'none';
    }

  }

}
