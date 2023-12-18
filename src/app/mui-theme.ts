import { createTheme } from '@mui/material/styles'
import { theme as yourCustomTheme } from '@/app/theme'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: yourCustomTheme.colors.primary
    },
    secondary: {
      main: yourCustomTheme.colors.secondary
    }
  }
})
