import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "../item";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  itemList: Item[]=[];
  selectedItem:Item;

  constructor(private httpClient: HttpClient) { }

  GetProfile() {
    this.httpClient.get('http://localhost:3000/items')
      .subscribe(
        (data: [Item]) => {
          
           for(let i=0;i<data.length;i++){
             this.itemList.push(data[i]);
           

        }  console.log(this.itemList[0]);
      }
      );    
  }

  ngOnInit() {
    this.GetProfile();
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}
