import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@mui/material/styles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real-Time Weather App',
  description:
    'Get accurate and up-to-date weather forecasts. Explore comprehensive weather data including temperature, wind speeds, and forecasts, all in a user-friendly interface.'
}

import { muiTheme } from '@/app/mui-theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <div className={inter.className}>{children}</div>
    </ThemeProvider>
  )
}
