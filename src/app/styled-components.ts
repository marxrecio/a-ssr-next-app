import styled, { keyframes } from 'styled-components'
import { theme } from './theme'
export const WeatherText = styled.p`
  margin: ${theme.spacing(1)} 0;
  font-weight: bold;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const responsiveWidth = '768px'

const boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'

const primaryColor = '#4a90e2' // Soft Blue
const secondaryColor = '#adb5bd' // Gentle Gray
const textColor = '#2c3e50' // Darker Shade
const errorColor = '#e74c3c' // Muted Red
const backgroundColor = '#f8f9fa' // Light Gray

const focusOutline = '2px solid #4D90FE'

export const Container = styled.div`
  height: 100%;
  font-family: ${theme.fonts.primary};
  background: ${backgroundColor};
  color: ${textColor};
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: ${responsiveWidth}) {
    padding: 10px;
  }
`

export const Title = styled.h1`
  font-family: ${theme.fonts.primary};
  color: ${primaryColor};
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
`

export const SearchForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: ${responsiveWidth}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid ${primaryColor};
  border-radius: 10px;
  &:focus {
    outline: ${focusOutline};
  }
  @media (max-width: ${responsiveWidth}) {
    margin: 0 0 10px 0;
  }
`

export const SubmitButton = styled.button`
  background-color: ${primaryColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${boxShadow};
  &:hover {
    background-color: ${secondaryColor};
  }
  &:focus {
    outline: ${focusOutline};
  }
`

export const WeatherInfo = styled.div`
  background-color: ${secondaryColor};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: inline-block;
  box-shadow: ${boxShadow};
`

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
  @media (max-width: ${responsiveWidth}) {
    flex-direction: column;
    align-items: center;
  }
`

export const DayCard = styled.div`
  margin-bottom: 20px;
  background-color: ${secondaryColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${boxShadow};
`

export const ErrorMessage = styled.div`
  color: ${errorColor};
  margin: 40px 0;
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
  z-index: 999;
`
