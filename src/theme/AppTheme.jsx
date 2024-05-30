import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { appTheme } from './app.theme'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node,
}
