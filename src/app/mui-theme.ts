'use-client'
import { createTheme } from '@mui/material/styles'
import { theme as yourCustomTheme } from '@/app/theme'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: yourCustomTheme.colors.primary
    },
    secondary: {
      main: yourCustomTheme.colors.secondary
    },
    error: {
      main: yourCustomTheme.colors.error
    },
    background: {
      default: yourCustomTheme.colors.background
    },
    text: {
      primary: yourCustomTheme.colors.text
    }
  }
})
