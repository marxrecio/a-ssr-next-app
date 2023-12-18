export interface ForecastData {
  date: string
  avgTemperature: number
  description: string
}

export interface WeatherData {
  description: string
  temperature: number
}

export interface WeatherProps {
  weather: WeatherData
  forecast: Array<ForecastData>
  error?: string
}
