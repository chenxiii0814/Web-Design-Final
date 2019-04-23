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
    this.http.get('http://localhost:3000/orders').subscribe((response)=>{
      this.orderList = response;
    })
  }

}
