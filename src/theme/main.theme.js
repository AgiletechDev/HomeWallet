import { createTheme } from '@mui/material'

export const mainTheme = createTheme({
  palette: {
    base: {
      main: '#33277B',
      dark: '#33277B',
      contrastText: '#fff',
    },
    /*     super: {
      main: '#b0cd2d',
      dark: '#f0ed3d',
      contrastText: 'black',
    }, */
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
})
