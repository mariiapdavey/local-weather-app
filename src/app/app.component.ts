import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CurrentWeatherComponent]
})
export class AppComponent {
  title = 'local-weather-app';
}