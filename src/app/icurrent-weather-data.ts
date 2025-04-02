export interface ICurrentWeatherData {
    weather:[{
        description: string,
        icon: string
    }],
    main:{
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        humidity: number,
    },
    wind:{
        speed: number
    }
    dt: number,
    sys:{
        country: string
    },
    name: string
}
