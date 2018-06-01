import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../restaurants-list';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants = RESTAURANTS;

  selectedRestaurant: Restaurant;


  constructor() { }

  ngOnInit() {
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }
}