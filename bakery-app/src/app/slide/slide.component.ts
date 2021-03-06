import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations:[
    trigger("slide_main",[
    //different style in different states
    state('shown',style({opacity: 1, height:'600px'})),
    state('hidden',style({opacity:0, height:'600px'})),
    // transition: control when and how to transact
    transition('shown=>hidden',animate('4s')),
    transition('hidden=>shown',animate('3s 2s'))
  ]),
    trigger("slide_main2",[
      state('shown',style({opacity: 1, height:'600px'})),
      state('hidden',style({opacity:0, height:'600px'})),
      // transition: control when and how to transact
      transition('shown=>hidden',animate('6s 3s')),
      transition('hidden=>shown',animate('3s 6s'))
    ]),
    trigger("slide_main3",[
      state('shown',style({opacity: 1, height:'600px'})),
      state('hidden',style({opacity:0, height:'600px'})),
      // transition: control when and how to transact
      transition('shown=>hidden',animate('3s 9s')),
      transition('hidden=>shown',animate('3s 9s'))
    ])
    ,
    trigger("slide_main4",[
      state('shown',style({opacity: 1, height:'600px'})),
      state('hidden',style({opacity:0, height:'600px'})),
      // transition: control when and how to transact
      transition('shown=>hidden',animate('3s 12s')),
      transition('hidden=>shown',animate('3s 12s'))
    ])
  ]
})
export class SlideComponent implements OnInit {
//set trigger variety for animation
  isShown1 = true;
  isShown2 = false;
  isShown3 = false;
  isShown4 = false;
  isShown5 = false;

  
  constructor() { }

  ngOnInit() {
    this.wait1s();
  }

  //set when the animation start and the state transform
  async wait1s() {
    await delay(1000);
    this.isShown1 = !this.isShown1;
    this.isShown2 = !this.isShown2;
    this.isShown3 = !this.isShown3;
    this.isShown4 = !this.isShown4;
    this.isShown5 = !this.isShown5;
  }
}
