import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss'],
  animations:[
    trigger('imgMove',[
      state('prev',style({'z-index':'3'})),
      state('next',style({'z-index':'2'})),
      state('last',style({'z-index':'1'})),
      state('on',style({'z-index':'3','opacity':'0'})),
      transition('prev=>on',[animate('2s')]),
      transition('next=>on',[animate('2s 2s')]),
      transition('last=>on',[animate('2s 4s')])
    ])
  ]
})
export class DetailLocationComponent implements OnInit {
  //set the booleans to trigger the animations
  isShown1 = true;
  isShown2 = true;
  isShown3 = true;

  constructor() { }

  ngOnInit() {
    this.wait();
  }
//go back to last page
  goBack(){
    history.go(-1);
  }

  //function to read boolean and set when to begin the animations
  async wait(){
    await delay(1000);
    this.isShown1=!this.isShown1;
    this.isShown2=!this.isShown2;
    this.isShown3=!this.isShown3;
  }
}
