import { GetServerSideProps } from 'next'
import React, { useState, useEffect } from 'react'
import { Title, SearchForm, Input, SubmitButton, SectionTitle } from '@/app/styled-components'
import { Container, Box } from '@mui/material'
import { fetchWeatherData } from '@/app/services'
import { WeatherData, ForecastData, WeatherProps } from '@/app/interfaces'
import { ForecastInfo, WeatherInfo, ErrorDisplay, LoadingSpinner } from '@/app/presentation-components'
import router from 'next/router'

const Weather: React.FC<WeatherProps> = props => {
  const [city, setCity] = useState<string>(props.city)
  const [titleCity, setTitleCity] = useState<string>(props.city)
  const [weather, setWeather] = useState<WeatherData | undefined>(props.weather)
  const [forecast, setForecast] = useState<ForecastData[] | undefined>(props.forecast)
  const [error, setError] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (router.query.city && router.query.city !== city) {
      setCity(router.query.city as string)
      setTitleCity(router.query.city as string)
    }
  }, [])

  const fetchWeatherData = async (city: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Error fetching weather data')
      }
      setWeather(data.weather)
      setForecast(data.forecast)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchWeatherData(city)
    setTitleCity(city)
    router.push(`/weather?city=${encodeURIComponent(city)}`)
  }

  if (error) return <ErrorDisplay error={error} />

  if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      <Title>Weather Report</Title>
      <SearchForm onSubmit={handleSubmit}>
        <Box sx={{ padding: '0 16px' }}>
          <SectionTitle>Search for a City</SectionTitle>
        </Box>
        <Input type="text" name="city" placeholder="Enter city name" value={city} onChange={e => setCity(e.target.value)} />
        <SubmitButton type="submit">Get Weather</SubmitButton>
      </SearchForm>
      {weather && <WeatherInfo weather={weather} city={titleCity} />}
      {forecast && forecast.length > 0 && <ForecastInfo forecast={forecast} />}
    </Container>
  )
}

export default Weather

export const getServerSideProps: GetServerSideProps = async context => {
  let city = context.query.city || 'London'

  if (Array.isArray(city)) {
    city = city[0]
  }

  try {
    const data = await fetchWeatherData(city)

    if (data.error) {
      throw new Error(data.error)
    }

    return {
      props: {
        weather: data.weather,
        forecast: data.forecast
      }
    }
  } catch (error: any) {
    return {
      props: {
        city,
        weather: null,
        forecast: [],
        error: error.message || 'Error fetching weather data'
      }
    }
  }
}
