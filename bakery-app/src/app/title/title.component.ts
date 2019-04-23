import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-title',
  templateUrl: `./title.component.html`,
  styleUrls: [`./title.component.scss`],

  // animations:[trigger("slide_main",[
  //   //different style in different states
  //   state('shown',style({opacity: 1, height:'300px'})),
  //   state('hidden',style({opacity:0.5, height:'300px'})),
  //   // transition: control when and how to transact
  //   transition('shown=>hidden',animate('3s')),
  //   transition('hidden=>shown',animate('3s'))
  // ])]
})
export class TitleComponent implements OnInit {
  // isShown = false;
  // // @Input() forSlides : boolean =true;
  // bannerPic:any[] = [
  //   {img:'main_pic2'},
  //   {img:'main_pic3'},
  //   {img:'main_pic4'},
  // ]


  constructor() { }

  ngOnInit() {

    // this.wait1s();

  }

  async wait1s() {
    await delay(1000);

    // this.isShown = !this.isShown;

  }

//set the logout style
  logout() {    
    document.getElementById("loggedUser").style.display='none';
    document.getElementById("loginController").style.display = 'block';
    alert("logout");
  }

}
