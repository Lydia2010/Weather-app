import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../../models/weather.service';
import {ActivatedRoute} from '@angular/router';
import {Weather} from '../../models/Weather';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  @Input() cityName: any = '';
  @Input() countryCode: any = '';

  weather: Weather;
  newCity: Weather [] = [];
  itemList: Weather [] = []



  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute) {
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.countryCode = this.route.snapshot.paramMap.get('countryName');
  }

  ngOnInit() {}

  // Subscribe on  searchWeather method
  // invoke service to get the city using parameter in search field
  // shows array to display in html page of this component

  getDetails() {
    this.weatherService.searchWeather(this.cityName, this.countryCode)
      .subscribe (data => {
          this.itemList = this.weatherService.setNewCityItem();
          // console.log('tempMax' + this.itemList);
      }
      );  }



// delete element from a list of cities
  delete(i: number): void {
    this.weatherService.deleteNewCityItem(i);
  }
}








