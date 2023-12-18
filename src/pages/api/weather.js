import axios from 'axios'

const processForecastData = list => {
  return list.reduce((acc, curr) => {
    const date = new Date(curr.dt * 1000).toDateString()
    if (!acc[date]) {
      acc[date] = { totalTemp: 0, count: 0, descriptions: new Set() }
    }
    acc[date].totalTemp += curr.main.temp
    acc[date].count++
    acc[date].descriptions.add(curr.weather[0].description)
    return acc
  }, {})
}

const convertForecastDataToArray = forecastData => {
  return Object.keys(forecastData).map(date => {
    const dayData = forecastData[date]
    const avgTemp = dayData.totalTemp / dayData.count
    const description = Array.from(dayData.descriptions).join(', ')
    return { date, avgTemperature: avgTemp, description }
  })
}

export default async function handler(req, res) {
  const city = req.query.city || 'London'

  try {
    const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: process.env.OPENWEATHER_API_KEY
      }
    })

    const forecastResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        q: city,
        units: 'metric',
        appid: process.env.OPENWEATHER_API_KEY
      }
    })

    const forecastData = processForecastData(forecastResponse.data.list)
    const dailyForecasts = convertForecastDataToArray(forecastData)

    res.status(200).json({
      weather: {
        description: weatherResponse.data.weather[0].description,
        temperature: weatherResponse.data.main.temp
      },
      forecast: dailyForecasts
    })
  } catch (error) {
    console.error('Error fetching weather data', error)
    res.status(500).json({ message: 'Error fetching weather data', error: error.message })
  }
}
