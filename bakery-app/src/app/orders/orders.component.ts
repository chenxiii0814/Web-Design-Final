import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "../item";
import { Image } from "../image";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  //class of show detail part
  public imageList = [
    'COOKIE',
    'MILK',
    'SHAKASHUKA',
    'SANDWICH',
    'TART',
    'YOGURT',
    'CHEESECAKE',
    'PIE',
    'SALAD',
    'TIRAMISU',
    'MACARONS',
    'BURGER',
    'CUPCAKE'];

  itemList: Item[] = [];
  selectedItem: Item;
  addedItem: Item;
  loggedUser: String;
  public recentItems = "None";
  public cart = [];

  constructor(private httpClient: HttpClient, private sessionSt: SessionStorageService) { }


  saveInLocal(name, price, cartItem): void {
    
    this.loggedUser = document.getElementById("loggedUser").innerHTML;

    //check if user is logged in 
    //user must log in before order
    if (this.loggedUser == "") {
      alert("You need to sign in first!");
    } else {

      //session
      let itemKey = name;
      this.sessionSt.store(name, price);
      console.log("the name is:" + name + 'its price:' + price);
      for (let i = 0; i < this.itemList.length; i++) {
        if (this.itemList[i].ItemName == itemKey) {
          this.addedItem = this.itemList[i];
          var str = JSON.stringify(this.addedItem);
          sessionStorage.obj = str;
          console.log(str);
         
        }
      }

      //added to order page's cart
      this.cart.push(cartItem);
      alert(cartItem + " was added!");
      console.log(this.cart);
    }


  }

  GetProfile() {
    this.httpClient.get('http://localhost:3000/items')
      .subscribe(
        (data: [Item]) => {
          for (let i = 0; i < data.length; i++) {
            this.itemList.push(data[i]);
          }
          console.log(this.itemList[0].ItemName);
        }
      ); console.log(this.itemList);
  }

  ngOnInit() {
    this.GetProfile();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    console.log(this.selectedItem)
  }



  addItem(item) {
    this.recentItems = item;
    this.cart.push(item);
    alert(item + "was added!");
  }

}
