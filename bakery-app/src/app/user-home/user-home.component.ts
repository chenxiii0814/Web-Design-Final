import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-home',
  templateUrl: `./user-home.component.html`,
  styleUrls: [`./user-home.component.scss`]
})
export class UserHomeComponent implements OnInit {
  username:String;
  private orderList;

  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.username=params.username);
  }

  getOrder(){
    var orderShow = "<div class='oderShow'>";
    let userNow = JSON.parse(sessionStorage.user)["UserName"];
    console.log("kakakaka"+userNow);
    this.http.get('http://localhost:3000/orders').subscribe((response)=>{
      this.orderList = response;
      for(let i=0;i<this.orderList.length;i++){
        let order=this.orderList[i];
        let orderU = order["User"];
        let orderName = orderU["UserName"];
        let orderItems = order["Item"];
        // console.log(orderName);
        if(orderName==userNow){
          orderShow+='<div class="orderId111">OrderID :'+order["OrderID"]+'<p class="ord">ITEM:'+orderItems["ItemName"]+'</p>';
        }
      }document.getElementById("showList").innerHTML=orderShow;
    })
  }

}
