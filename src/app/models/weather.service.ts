// Services to retrieve data from backend

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // we need to communicate with API service
import {Observable, of} from 'rxjs';
import {Cities} from './Cities';
import {map} from 'rxjs/operators';
import {Weather} from './Weather';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = 'https://api.openweathermap.org/';
  newCity: Weather;
  newCityItem: Weather [] = [];


  constructor(private http: HttpClient) {
  }

  // invoke service to get information about current city
    searchWeather(cityName: string, countryCode: string): Observable<any> {
    const url = this.baseUrl + 'data/2.5/weather?q=' + cityName + ',' + countryCode
      + '&appid=767194a5bfc90703a89bfa0e7cedaa68&units=metric';
    return this.http.get(url).pipe(
      map(res => (this.newCity = new Weather(res))
      ));
  }


// add new City to array of cities
  setNewCityItem(): Weather [] {
    this.newCityItem.push(this.newCity);
    console.log (this.newCityItem);
    return this.newCityItem;
  }

// delete chosen city from the array
  deleteNewCityItem(i: number): void {
    this.newCityItem.splice(i, 1);
  }
}

