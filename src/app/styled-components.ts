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

export const AltContainer = styled.div`
  height: 100%;
  font-family: ${theme.fonts.primary};
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 10px;
  }
`

export const Title = styled.h1`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.primary};
  margin-bottom: 20px;
  font-size: 2.5em;
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

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.primary};
  font-size: 1.5em;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
`

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 10px;
  &:focus {
    outline: 3px solid ${theme.colors.focus};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    margin: 0 0 10px 0;
    width: 100%;
  }
`

export const SubmitButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${theme.shadows.md};
  &:hover {
    background-color: ${theme.colors.secondary};
  }
  &:focus {
    outline: ${theme.colors.focus};
  }
`

export const WeatherInfo = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  display: inline-flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
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
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing(4)};
  border-radius: 10px;
  box-shadow: ${theme.shadows.md};
`

export const ErrorMessage = styled.div`
  color: ${theme.colors.error};
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
