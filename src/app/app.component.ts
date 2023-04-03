import {Component} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'floor'})
export class FloorPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  obj: any = {};

  index: any = null;

  constructor(private weather_obj: WeatherService) {
    this.getWeather("Zhytomyr")

  }

  showMore(value: any) {
    this.index = value;
  }

  getWeather(cityname: any) {
      this.weather_obj.getWeather(cityname).subscribe(weatherObj => {
        console.log(weatherObj);
        this.obj = weatherObj;

      })
  }
}

