import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../../models/weather.service';
import {Cities} from '../../models/Cities';
import {ActivatedRoute} from '@angular/router';
import {Weather} from '../../models/Weather';
import {CityItemComponent} from '../city-item/city-item.component';
import {MatBottomSheetRef} from '@angular/material';


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


  getDetails() {
    this.weatherService.searchWeather(this.cityName, this.countryCode)
      .subscribe (data => {
         // const itemList = new Cities(data.cityName, data.countryCode, data.tempMax);
          this.itemList = this.weatherService.setNewCityItem();
       //  this.itemList = data;
          console.log('tempMax' + this.itemList);
        // this.itemList.push(data);
         // return this.itemList;

      }
      );  }




  delete(i: number): void {
    this.weatherService.deleteNewCityItem(i);
  }
}








