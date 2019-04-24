import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from "../user";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
  //set animation trigger and state
  animations: [
    trigger('imgMove', [
      state('prev', style({ 'z-index': '3' })),
      state('next', style({ 'z-index': '2' })),
      state('last', style({ 'z-index': '1' })),
      state('on', style({ 'z-index': '3', 'opacity': '0' })),
      transition('prev=>on', [animate('2s')]),
      transition('next=>on', [animate('2s 2s')]),
      transition('last=>on', [animate('2s 4s')])
    ])
  ]
})
export class OrderHistoryComponent implements OnInit {

  private orderList;
  //set trigger var to call animation
  isShown1 = true;
  isShown2 = true;
  isShown3 = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getOrder();
    this.wait();
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

        if (orderP == userNow) {
          orderShow += '<div class="orderId111">OrderID :' + order["OrderID"] + '<p class="ord">ITEM:' + orderItems["ItemName"] +"&nbsp"+"&nbsp"+ order.Item["Price"] +'</p>';
        }
      } document.getElementById("showList").innerHTML = orderShow;
    })
  }
  //call the animation async and latter than the main thread for 1000ms
  async wait() {
    await delay(1000);
    this.isShown1 = !this.isShown1;
    this.isShown2 = !this.isShown2;
    this.isShown3 = !this.isShown3;
  }
}
