import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { SliderComponent } from './view/slider/slider.component';
import { FooterComponent } from './view/footer/footer.component';
import { DescriptionAreaComponent } from './view/description-area/description-area.component';
import { ClientRegistrationComponent } from './view/client-registration/client-registration.component';
import { CDnavbarComponent } from './view/cdnavbar/cdnavbar.component';
import { LoginComponent } from './view/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    DescriptionAreaComponent,
    ClientRegistrationComponent,
    CDnavbarComponent,
    LoginComponent
     ],
  imports: [
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
