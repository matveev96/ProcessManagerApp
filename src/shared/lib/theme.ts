import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#3b3b3b',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.2)',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontSize: '13px',
        },
        input: {
          padding: '10px 12px',
        },
      },
    },
  },
})
