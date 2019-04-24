import {Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './../order-model/order';
import {SessionStorageService} from "ngx-webstorage";
import {Router} from '@angular/router';

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
          userlist;

  private order = new Order(this.orderID, this.user, this.item);

  constructor(private http:HttpClient,private sessionSt:SessionStorageService, private router:Router){}

  ngOnInit() {
    this.retrieve();
  }
//get user from session and build an order
  checkOut(){

    let username=document.getElementById("logged").innerText;
    let newname = document.getElementById("loggedUser").innerText;
    if(username==""&& newname==""){
      alert("you should login first!");
    }else if(this.item==undefined){
    alert("Please add an item!");
    }else{
      this.order.OrderID = this.orderID;
      this.order.User = this.user;
      this.order.Item = this.item;
      console.log(this.order);
      // this.placeOrder(this.order);
      this.router.navigateByUrl('/')
    };

//tip thanks
    if(Number((<HTMLInputElement>document.getElementById('tip')).value)>=0){
      console.log("Thanks for your tip");
    }
    else {
      alert("tip cannot be negetive.");
      return false;
    }
//validations for checkout info
    let errorInfo = "";
    if ((<HTMLInputElement>document.getElementById('firstName')).value == "") {
      errorInfo = "First name cannot be null!\n";
    }
    if ((<HTMLInputElement>document.getElementById('lastName')).value == "") {
      errorInfo = "Last name cannot be null!\n";
    }
    if ((<HTMLInputElement>document.getElementById('email')).value == "") {
      errorInfo = "Email cannot be null!\n";
    }
    if ((<HTMLInputElement>document.getElementById('cardNumber')).value == "") {
      errorInfo = "Card number cannot be null!\n";
    }
    if ((<HTMLInputElement>document.getElementById('expiration')).value == "") {
      errorInfo = "Expiration cannot be null!\n";
    }
    if ((<HTMLInputElement>document.getElementById('cvv')).value == "") {
      errorInfo = "cvv cannot be null!\n";
    }
    if ((<HTMLInputElement>document.getElementById('zipCode')).value == "") {
      errorInfo = "Zip code cannot be null!\n";
    }
    if (errorInfo == "") {
      this.placeOrder(this.order);
    }else {
      alert(errorInfo);
      return false;
    }

  }
//send the order to database
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
//retrieve the items in session and print them on the front end
  retrieve(){
    this.orderID=Date.parse(new Date().toString());
    document.getElementById("IdNum").innerHTML=this.orderID.toString();
    console.log(this.orderID);
    var str=sessionStorage.obj;
    this.item =JSON.parse(str);
    console.log(this.item["ItemName"]);
    document.getElementById("items").innerHTML=this.item["ItemName"] + "&nbsp"+"&nbsp"+"&nbsp" +"&nbsp" +"&nbsp" + this.item["Price"];
    document.getElementById("totalPrice").innerHTML="&nbsp"+"&nbsp"+ this.item['Price'];
    let nameOfUser= sessionStorage.user;
    this.user=JSON.parse(nameOfUser);
    document.getElementById("orderUser").innerHTML=this.user["UserName"];
  }


//remove the item in cart
  removeItem(){
    document.getElementById("items").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("totalPrice").style.display = "none";
    delete this.item;
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
