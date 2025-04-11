import { Component, Input} from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe, 
            DecimalPipe, 
            CommonModule, 
            MatToolbarModule, 
            MatCardModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  faCoffee=faCoffee;
  @Input() current: ICurrentWeather = {
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

 
}
