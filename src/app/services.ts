import axios from 'axios'

export async function fetchWeatherData(city: string) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    )
    const forecastResponse = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    )

    const processForecastData = (list: any[]) => {
      const forecastData = list.reduce((acc: any, curr: any) => {
        const date = new Date(curr.dt * 1000).toDateString()
        if (!acc[date]) {
          acc[date] = { totalTemp: 0, count: 0, descriptions: new Set() }
        }
        acc[date].totalTemp += curr.main.temp
        acc[date].count++
        acc[date].descriptions.add(curr.weather[0].description)
        return acc
      }, {})

      return Object.keys(forecastData).map(date => {
        const dayData = forecastData[date]
        const avgTemp = dayData.totalTemp / dayData.count
        const description = Array.from(dayData.descriptions).join(', ')

        return { date, avgTemperature: avgTemp, description }
      })
    }

    const dailyForecasts = processForecastData(forecastResponse.data.list)

    return {
      weather: {
        description: response.data.weather[0].description,
        temperature: response.data.main.temp
      },
      forecast: dailyForecasts
    }
  } catch (error) {
    console.error('Error fetching weather data', error)
    return { error: 'Failed to fetch weather data' }
  }
}
