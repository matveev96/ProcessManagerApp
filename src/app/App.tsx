// import s from './App.module.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from '../shared/lib/theme.ts'
import Layout from './layout/ui/Layout.tsx'
import { Login } from '../pages/login/Login.tsx'
import { selectIsLoggedIn, setModalLogin } from './store/appSlice.ts'
import { useAppSelector } from './store/hooks/useAppSelector.ts'
import { useAppDispatch } from './store/hooks/useAppDispatch.ts'

function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const dispatch = useAppDispatch()
  if (!isLoggedIn) {
    dispatch(setModalLogin({ modalLogin: true }))
  }
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {isLoggedIn ? <Layout /> : <Login />}
    </ThemeProvider>
  )
}

export default App
