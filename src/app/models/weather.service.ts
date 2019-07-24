import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // we need to communicate with API service
import {Observable} from 'rxjs';

interface Location {
  latitude: string;
  longitude: string;

}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 // private baseUrl = 'https://ipapi.co/json/';

  constructor(private http: HttpClient) { }

    getLocation() {
      return this.http.get<Location> ('https://ipapi.co/json/');

  }
}

// return this.http.get<Location>('https://ipapi.co/json/')
