import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent, FloorPipe} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WeatherService} from "../services/weather.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FloorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
