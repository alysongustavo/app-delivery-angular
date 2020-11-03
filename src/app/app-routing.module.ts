import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {HomeComponent} from "./home/home.component";
import {RestaurantDetailComponent} from "./restaurants/restaurant-detail/restaurant-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
