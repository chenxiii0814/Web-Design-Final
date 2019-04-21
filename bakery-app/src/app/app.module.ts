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
import { SurpriseComponent } from './surprise/surprise.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NewsComponent } from './news/news.component';

import { HttpClientModule }    from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { UserHomeComponent } from './user-home/user-home.component';



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
    GiftitemsComponent,

    LoginComponent,
    RegisterComponent,
    SurpriseComponent,
    ComingSoonComponent,
    NewsComponent,
    OrdersComponent,
    UserHomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: SlideComponent
      },
      {
        path:'signin',
        component: LoginComponent
      },
      {
        path:'signup',
        component: RegisterComponent
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

        path:'location/comingSoon',
        component: ComingSoonComponent
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
        path:'shop/surprise',
        component: SurpriseComponent
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
        path:'news',
        component: NewsComponent
      },
      {
        path:'orders',
        component: OrdersComponent
      },
      {
        path:'userhome',
        component: UserHomeComponent
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

