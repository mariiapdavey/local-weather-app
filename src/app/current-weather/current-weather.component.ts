import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe, DecimalPipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  current: ICurrentWeather = {
    city: 'Seattle',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 67,
    description: 'Sunny weather'
  }
}
