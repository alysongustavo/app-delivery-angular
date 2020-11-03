import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {RestaurantsService} from "./restaurants/restaurant/restaurants.service";
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantsComponent,
    RestaurantComponent,
    HomeComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
