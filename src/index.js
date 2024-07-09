import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red, purple } from '@mui/material/colors'

import './index.css'

const theme = createTheme({
  palette:{
    primary:{
      main: red[900],
    },
    secondary:{
      main: purple[900],
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

