import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';


import { RouterModule } from '@angular/router';//router
import { MenuComponent } from './menu/menu.component';//menu part
import { NotFoundComponent } from './not-found/not-found.component';
import { SlideComponent } from './slide/slide.component';
import { MenuPDFComponent } from './menu-pdf/menu-pdf.component';

import { LocationComponent } from './location/location.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ShopComponent } from './shop/shop.component';
import { GiftitemsComponent } from './giftitems/giftitems.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    NotFoundComponent,
    SlideComponent,
    MenuPDFComponent,

    LocationComponent,
    DetailLocationComponent,
    ContactComponent,
    AboutComponent,
    CareerComponent,
    ShopComponent,
    GiftitemsComponent

    LoginComponent,
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: SlideComponent
      },
      {

        path:'about',
        component: AboutComponent
      },
      {

        path:'location/detail',
        component: DetailLocationComponent
      },
      {
        path:'location',
        component: LocationComponent
      },
      {

        path:'menus/:id',
        component: MenuPDFComponent
      },
      {
        path:'menus',
        component: MenuComponent
      },
      { 
        path:'career',
        component: CareerComponent
      },
      { 
        path:'contact',
        component: ContactComponent
      },
      { 
        path:'shop/giftitems',
        component: GiftitemsComponent
      },
      { 
        path:'shop',
        component: ShopComponent
      },
      {
        path:'**',
        component: NotFoundComponent
      },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

