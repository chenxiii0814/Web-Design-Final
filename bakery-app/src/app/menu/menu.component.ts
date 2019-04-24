import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

//all the click are default 'false' in order to hide the list div
export class MenuComponent implements OnInit {
  clickb = false;
  clicka = false;
  clickc = false;
  clickd = false;
  clicke = false;
  clickf = false;

  ngOnInit() {}
  
  //click event binding with the status of specific transfer of 'click' in order to diaplay the list div
  view(){
    this.clickb = true;
    this.clickc = false;
    this.clickd = false;
    this.clicke = false;
    this.clickf = false;
    }
  view2(){
    this.clickb = false;
    this.clicke = false;
    this.clickf = false;
    this.clickd = false;
    this.clickc = true;
  }
  view3(){
    this.clickd = false;
    this.clickc = false;
    this.clicke = false;
    this.clickf = false;
    this.clickd = true;
  }
  view4(){
    this.clickb = false;
    this.clickc = false;
    this.clickd = false;
    this.clickf = false;
    this.clicke = true;
  }
  view5(){
    this.clickb = false;
    this.clickc = false;
    this.clickd = false;
    this.clicke = false;
    this.clickf = true;
  }


  }

