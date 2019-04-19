import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router" ;
import { Menus } from '../menus';

@Component({
  selector: 'app-menu-pdf',
  templateUrl: './menu-pdf.component.html',
  styleUrls: ['./menu-pdf.component.scss']
})
export class MenuPDFComponent implements OnInit {

  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        let id = params.get('id');
        console.log(id);
      })
  }

}
