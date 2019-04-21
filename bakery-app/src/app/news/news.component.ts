import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: `./news.component.html`,
  styleUrls: [`./news.component.scss`]
})
export class NewsComponent implements OnInit {

  constructor(private el:ElementRef, private renderer2:Renderer2) { }

//show news while click the dt element
  onclick1(){
    document.getElementById("news_1").style.display='block'
    // document.getElementById("123").nextSibling;
  }

  onclick2(){
      document.getElementById("news_2").style.display='block'
    // document.getElementById("123").nextSibling;
  }

  ngOnInit() {
  }

}
