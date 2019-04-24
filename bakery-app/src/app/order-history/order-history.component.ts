import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from "../user";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  private orderList;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getOrder();
  }

  //go back to last page
  goBack() {
    history.go(-1);
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
          orderShow += '<div class="orderId111">OrderID :' + order["OrderID"] + '<p class="ord">ITEM:' + orderItems["ItemName"] + '</p>';
        }
      } document.getElementById("showList").innerHTML = orderShow;
    })
  }

}
