import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  animations:[trigger("slide_main",[
    //different style in different states
    state('shown',style({opacity: 1, height:'300px'})),
    state('hidden',style({opacity:0.5, height:'300px'})),
    // transition: control when and how to transact
    transition('shown=>hidden',animate('3s')),
    transition('hidden=>shown',animate('3s'))
  ])]
})
export class SlideComponent implements OnInit {

  isShown = false;
  // @Input() forSlides : boolean =true;
  bannerPic:any[] = [
    {img:'main_pic2'},
    {img:'main_pic3'},
    {img:'main_pic4'},
  ]
  
  constructor() { }

  ngOnInit() {
    this.wait1s();
  }

  async wait1s() {
    await delay(1000);
    this.isShown = !this.isShown;
  }
}
