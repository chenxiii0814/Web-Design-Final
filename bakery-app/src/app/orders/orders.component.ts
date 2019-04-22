import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "../item";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  itemList: Item[] = [];
  selectedItem: Item;
  addedItem:Item;

  constructor(private httpClient: HttpClient) { }

  GetProfile() {
    this.httpClient.get('http://localhost:3000/items')
      .subscribe(
        (data: [Item]) => {

          for (let i = 0; i < data.length; i++) {
            this.itemList.push(data[i]);
          }
          console.log(this.itemList[0].ItemName);
        }
      );console.log(this.itemList);
  }

  ngOnInit() {
    this.GetProfile();
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  public recentItems = "None";
  public cart = [];
  addItem(item) {
    this.recentItems=item;
    this.cart.push(item);
    alert(item + "was added!");
  }




  // public testlist=['item1', 'item2', 'item3'];
  // public recentItems = "None";
  // public cart = [];
  // addItem(test) {
  //   this.recentItems=test;
  //   this.cart.push(test);
  //   alert(test + "was added!");
  // }

}
