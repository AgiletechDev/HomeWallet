import PropTypes from 'prop-types'
// import { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './main.theme'
import { CssBaseline } from '@mui/material'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node,
}
