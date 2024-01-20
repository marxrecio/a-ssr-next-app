import {
  AltContainer,
  WeatherInfo as WeatherInfoStyled,
  WeatherText,
  DayCard,
  ErrorMessage,
  LoadingOverlay,
  SectionTitle,
  ForecastContainer
} from '@/app/styled-components'
import { ForecastData, WeatherData } from '@/app/interfaces'
import { CircularProgress, Grid } from '@mui/material'

const capitalizeFirstLetter = (text: string) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const ForecastInfo = ({ forecast }: { forecast: ForecastData[] }) => (
  <AltContainer>
    <Grid container flexDirection={'column'} spacing={1}>
      <Grid item>
        <SectionTitle>Forecast</SectionTitle>
      </Grid>
      <ForecastContainer>
        <Grid container spacing={4}>
          {forecast.map((day, index) => (
            <Grid key={index} item xs={12} sm={4}>
              <AltContainer>
                <WeatherCard day={day} />
              </AltContainer>
            </Grid>
          ))}
        </Grid>
      </ForecastContainer>
    </Grid>
  </AltContainer>
)

export const WeatherCard = ({ day }: { day: ForecastData }) => (
  <DayCard>
    <WeatherText>{day.date}</WeatherText>
    <WeatherText>{day.avgTemperature.toFixed(0)} °C</WeatherText>
    <WeatherText>{day.description.replace(/, /g, ' | ')}</WeatherText>
  </DayCard>
)

export const WeatherInfo = ({ weather, city }: { weather: WeatherData; city: string }) => (
  <AltContainer>
    <Grid container flexDirection={'column'} spacing={1}>
      <Grid item>
        <SectionTitle>Current Weather at {capitalizeFirstLetter(city)}</SectionTitle>
      </Grid>
      <Grid item>
        <WeatherInfoStyled>
          <WeatherText>{weather.description}</WeatherText>
          <WeatherText>{weather.temperature.toFixed(0)} °C</WeatherText>
        </WeatherInfoStyled>
      </Grid>
    </Grid>
  </AltContainer>
)

export const ErrorDisplay = ({ error }: { error: string }) => <ErrorMessage>Error: {error}</ErrorMessage>

export const LoadingSpinner = () => (
  <LoadingOverlay>
    <CircularProgress />
  </LoadingOverlay>
)
