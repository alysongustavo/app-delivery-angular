import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "./restaurant.model";

@Component({
  selector: 'dev-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit(): void {
  }

  obterRestaurant(){
    console.log(`Restaurante clicado, Nome: ${this.restaurant.name}, categoria: ${this.restaurant.category}`)
  }

}
