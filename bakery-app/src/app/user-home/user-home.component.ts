import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-home',
  template: `
    <p>
      userhome working!
      {{username}}
    </p>
  `,
  styles: []
})
export class UserHomeComponent implements OnInit {
  username:String;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.username=params.username);

  }

}
