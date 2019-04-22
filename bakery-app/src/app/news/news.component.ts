import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {state, trigger} from "@angular/animations";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-news',
  templateUrl: `./news.component.html`,
  styleUrls: [`./news.component.scss`],
  // animations:[
  //   trigger("disappear",[
  //     state()
  //   ])
  // ]
})
export class NewsComponent implements OnInit {
  show = {
    'news1': false,
    'news2': false,
    'news3': false,
    'news4': false,
  }
  height;
  ps = ['news1', 'news2', 'news3', 'news4'];
  quotes = {
    'news1': 'OVER THE COURSE OF JUST A DECADE, MAX HOMEMADE BAKERY & CAFÉ HAS GROWN FROM A HOME KITCHEN OPERATION INTO A FAVORITE PURVEYOR OF PÂTISSERIE IN BOSTON',
    'news2': 'TODAY, I’M FOCUSED ON OUR GROWTH, OUR PEOPLE, THE FOOD AND BAKERY, AND PROTECTING AND DEVELOPING THE BRAND. ',
    'news3': 'MY FIRST BIG BAKING MEMORY IS OF MY MOM AND ME, TAKING OVER THE COMMERCIAL KITCHEN WHERE WE LIVED FOR THE WEEKEND AND BAKING DOZENS, BRIOCHE AND ALL KIND OF MORNING PASTRIES.',
    'news4': 'GUESTS WILL GO—DARE WE SAY IT—NUTS OVER THIS 14-INCH PASTRY OVERFLOWING WITH HANDMADE CARAMEL AND CRUNCHY CANDIED PECANS, CASHEWS, WALNUTS, PISTACHIOS, AND HAZELNUTS.'
  };


  constructor(private el:ElementRef, private renderer2:Renderer2) { }

// show news while click the dt element
  onclick1(elemId){
    this.show[elemId]=!this.show[elemId];
    console.log(elemId, this.show[elemId]);
    document.getElementById(elemId).style.height=this.show[elemId] ? '0':'200px';
    document.getElementById(elemId).style.margin=this.show[elemId] ? '0':'0';
    document.getElementById(elemId+'sub').style.display=this.show[elemId] ? 'block':'none';
    // document.getElementById("123").nextSibling;
  }

  ngOnInit() {
    // this.height=document.getElementById("news1").style.height;
  }

}
