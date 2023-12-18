import { WeatherInfo as WeatherInfoStyled, WeatherText, DayCard, ErrorMessage, LoadingOverlay } from '@/app/styled-components'
import { ForecastData, WeatherData } from '@/app/interfaces'
import CircularProgress from '@mui/material/CircularProgress'

export const WeatherCard = ({ day }: { day: ForecastData }) => (
  <DayCard>
    <WeatherText>{day.date}</WeatherText>
    <WeatherText>{day.avgTemperature} °C</WeatherText>
    <WeatherText>{day.description}</WeatherText>
  </DayCard>
)

export const WeatherInfo = ({ weather }: { weather: WeatherData }) => (
  <WeatherInfoStyled>
    <WeatherText>{weather.description}</WeatherText>
    <WeatherText>{weather.temperature} °C</WeatherText>
  </WeatherInfoStyled>
)

export const ErrorDisplay = ({ error }: { error: string }) => <ErrorMessage>Error: {error}</ErrorMessage>

export const LoadingSpinner = () => (
  <LoadingOverlay>
    <CircularProgress />
  </LoadingOverlay>
)
