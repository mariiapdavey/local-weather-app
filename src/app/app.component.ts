import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CitySearchComponent } from "./city-search/city-search.component";
import { ICurrentWeather } from './icurrent-weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CurrentWeatherComponent,
    MatToolbarModule,
    MatCardModule,
    FontAwesomeModule, 
    CitySearchComponent]
})
export class AppComponent {
  title = 'local-weather-app';

  currentWeather: ICurrentWeather = {
      city: '',
      country: '',
      date: new Date(),
      image: '',
      temperature: 0,
      description: '',
      feels_like: 0, 
      temp_min: 0, 
      temp_max: 0, 
      humidity: 0, 
      speed: 0
    }

    constructor(private weatherService: WeatherService){}

    doSearch(searchValue: string){
      const userInput = searchValue.split(',').map(s => s.trim())
      this.weatherService.getCurrentWeather(userInput[0], userInput[1]??undefined).subscribe(data => this.currentWeather = data)
    }

}