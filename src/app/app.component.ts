import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CitySearchComponent } from "./city-search/city-search.component";

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
}