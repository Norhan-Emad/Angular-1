import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"} ,
  {path :"home" , component :HomeComponent} ,
  {path :"about" , component :AboutComponent} ,
  {path:"portfolio" , component :PortfolioComponent} ,
  {path:"contact" , component :ContactComponent} ,
  {path:"**" , redirectTo: "home" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
