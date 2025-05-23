import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ICurrentWeatherData } from './icurrent-weather-data';
import { ICurrentWeather } from './icurrent-weather';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient, private env: EnvService) { }

  getCurrentWeather(search: string|number, country?: string){

    let uriParams = ''
    if (typeof search === 'string'){
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }
    if (country){
      uriParams = `${uriParams}, ${country}`
    }

    return this.httpClient
      .get<ICurrentWeatherData>(`https://api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${this.env.appId}`)
      .pipe(map(data => this.transformToICurrentWeather(data)))
    
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather{
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt*1000),
      temperature: data.main.temp * 9/5-459.67,
      description: data.weather[0].description,
      image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,

      temp_min: data.main.temp_min * 9/5-459.67, 
      temp_max: data.main.temp_max * 9/5-459.67, 
      humidity: data.main.humidity, 
      speed: data.wind.speed,
      feels_like: data.main.feels_like * 9/5-459.67
    }
  }
}
