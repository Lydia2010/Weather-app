import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../models/weather.service';
import {Weather} from '../../models/Weather';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {

  newCityItem: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.newCityItem = this.weatherService.getNewCityItem();
  }

}
