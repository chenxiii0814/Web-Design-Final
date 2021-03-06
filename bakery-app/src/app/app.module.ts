import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';

//for router part
import { RouterModule } from '@angular/router';
//for menu part
import { MenuComponent } from './menu/menu.component';
//in case for any router error
import { NotFoundComponent } from './not-found/not-found.component';
import { SlideComponent } from './slide/slide.component';


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
import { NgxWebstorageModule} from "ngx-webstorage";
import { HttpClientModule }    from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    NotFoundComponent,
    SlideComponent,


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
    UserHomeComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    EditProfileComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    //router link
    RouterModule.forRoot([
      {
        path:'',
        component: SlideComponent
      },
      {
        path:'checkOut',
        component: CheckoutComponent
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
        path:'userhome/editprofile',
        component: EditProfileComponent
      }, 
      {
        path:'userhome/orderhistory',
        component: OrderHistoryComponent
      },
      {
        path:'userhome',
        component: UserHomeComponent
      },
      {
        path:'**',
        component: NotFoundComponent
      },
    ]),
    NgxWebstorageModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

