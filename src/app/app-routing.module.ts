import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';
import { StudioComponent } from './studio/studio.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'men', component:MensComponent},
  {path:'women', component:WomenComponent},
  {path:'kids', component:KidsComponent},
  {path:'home', component:HomeComponent},
  {path:'beauty', component:BeautyComponent},
  {path:'studio',component:StudioComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
