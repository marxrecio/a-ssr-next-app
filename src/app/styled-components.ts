import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div`
  font-family: ${theme.fonts.primary};
  background: linear-gradient(to right, #6dd5fa, #ff758c);
  color: ${theme.colors.text};
  padding: ${theme.spacing(4)};
  text-align: center;
`

export const SearchForm = styled.form`
  margin-bottom: ${theme.spacing(4)};
`

export const Input = styled.input`
  padding: ${theme.spacing(1)};
  margin-right: ${theme.spacing(2)};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.spacing(1)};
`

export const SubmitButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: ${theme.spacing(1)};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`

export const Title = styled.h1`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing(2)};
`

export const WeatherInfo = styled.div`
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing(2)};
  border-radius: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(4)};
  display: inline-block;
`

export const WeatherText = styled.p`
  margin: ${theme.spacing(1)} 0;
  font-weight: bold;
`

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column; // Change to column for vertical stacking
  align-items: center; // Align items in the center
  padding: ${theme.spacing(2)} 0;
`

export const DayCard = styled.div`
  margin-bottom: ${theme.spacing(2)}; // Add bottom margin for spacing between cards
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing(2)};
  border-radius: ${theme.spacing(1)};
  width: 100%; // Set width to 100% for full-width cards
`

export const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  margin: ${theme.spacing(4)} 0;
`

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  z-index: 999; // Ensure it's above other elements
`
