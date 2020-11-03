import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../restaurant/restaurants.service";
import {ActivatedRoute} from "@angular/router";
import {Restaurant} from "../restaurant/restaurant.model";

@Component({
  selector: 'dev-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantsService, private activeRoute: ActivatedRoute) {
  }


  ngOnInit(): void {

    this.restaurantService.restaurant(this.activeRoute.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)

  }

}
