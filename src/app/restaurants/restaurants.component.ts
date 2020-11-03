import {Component, Input, OnInit} from '@angular/core';
import {RestaurantsService} from "./restaurant/restaurants.service";
import {Restaurant} from "./restaurant/restaurant.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'dev-restaurants',
  templateUrl: './restaurants.component.html',
  viewProviders: [Title]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant>

  constructor(private restaurantService: RestaurantsService, title: Title) {
      title.setTitle("Hello word")
  }

  ngOnInit(): void {
    this.restaurantService.restaurants()
      .subscribe((data: Array<Restaurant>) => this.restaurants = data)
  }

}
