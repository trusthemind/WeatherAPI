import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(name: string) {
    // return this.http.get(`http://api.weatherapi.com/v1/current.json?key=9aaf0a75ac754f73b52130424232803&q=${name}&aqi=yes`)
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=9aaf0a75ac754f73b52130424232803&q=${name}&days=1&aqi=yes&alerts=no`);
  }
}
