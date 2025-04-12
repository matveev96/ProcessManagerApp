// import s from './App.module.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from '../shared/lib/theme.ts'
import Layout from './layout/ui/Layout.tsx'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}

export default App
