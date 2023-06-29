import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './content/content.component';
import { OmgDealsComponent } from './omg-deals/omg-deals.component';
import { TitlecardsComponent } from './titlecards/titlecards.component';
import { FooterComponent } from './footer/footer.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';
import { StudioComponent } from './studio/studio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,

    ContentComponent,
    OmgDealsComponent,
    TitlecardsComponent,
    FooterComponent,
    MensComponent,
    WomenComponent,
    KidsComponent,
    HomeComponent,
    BeautyComponent,
    StudioComponent,
    NavbarComponent,
    HomepageComponent,
    CarouselComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
