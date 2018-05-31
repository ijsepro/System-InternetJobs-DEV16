import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { SliderComponent } from './view/slider/slider.component';
import { FooterComponent } from './view/footer/footer.component';
import { DescriptionAreaComponent } from './view/description-area/description-area.component';
import { ClientRegistrationComponent } from './view/client-registration/client-registration.component';
import { CDnavbarComponent } from './view/cdnavbar/cdnavbar.component';
import { BannerComponent } from './view/banner/banner.component';
import { UpdateClientComponent } from './view/client/update-client/update-client.component';
import { ClientComponent } from './view/client/client.component';
import { DeleteClientComponent } from './view/client/delete-client/delete-client.component';
/*import { HomeComponent } from './view/home/home.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { UserComponent } from './view/user/user.component';
import { appRoutes } from './routes';
import { SheardService } from './sheard.service';*/




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
    BannerComponent,
    UpdateClientComponent,
    ClientComponent,
    DeleteClientComponent
   /* HomeComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent
    */
     ],
  imports: [
      BrowserModule,
     /* FormsModule,
      RouterModule.forRoot(appRouter),
      HttpClientModule,
      BrowserAnimationsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// sheardService
export class AppModule { }
