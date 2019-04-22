import {Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './../order-model/order';
import {SessionStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  // private orderList;
  // showId: HTMLElement;

  private orderID;
  private user;
  private item;
          attribute;
  private order = new Order(this.orderID, this.user, this.item)

  constructor(private http:HttpClient,private sessionSt:SessionStorageService) { }

  ngOnInit() {
    this.retrieve();
  }

  checkOut(){
    this.order.OrderID = this.orderID;
    this.order.User = this.user;
    this.order.Item = this.item;
    this.placeOrder(this.order);
  }

  placeOrder(order:Order){
    this.http.post<Order>('http://localhost:3000/orders', {
      'OrderID': order.OrderID,
      'User': order.User,
      'Item':order.Item
    }).subscribe(
      (val) => {
        console.log("POST call successful", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.")
      }
    )
  }

  retrieve(){
    var str=sessionStorage.obj;
    this.attribute =JSON.parse(str);
    console.log(this.attribute);
    let itemDetail = 
    // let showItem = document.getElementById('items');
    
  }

  // getOrderID(){
  //   this.http.get('http/localhost:3000/orders').subscribe((response)=>{
  //     this.orderList = response;
  //   })
  // }

  // showID(id){
  //   this.showId = document.getElementById('orderID');
  //   this.showList.innerHTML = "Order ID:" + this.orderList[x].
  // }
}
