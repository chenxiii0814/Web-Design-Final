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
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    NotFoundComponent,
    SlideComponent,
    MenuPDFComponent,
    ContactComponent

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
        path:'menus/:id',
        component: MenuPDFComponent
      },
      {
        path:'menus',
        component: MenuComponent
      },
      { 
        path:'contact',
        component: ContactComponent
      },
      {
        path:'**',
        component: NotFoundComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

