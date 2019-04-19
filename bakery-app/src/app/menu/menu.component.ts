import { Component, OnInit } from '@angular/core';
import { MENUSS } from '../menusList';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus = MENUSS;

  constructor() { }

  ngOnInit() {
  }

}
