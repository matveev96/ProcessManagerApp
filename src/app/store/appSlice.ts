import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    modalLogin: false,
    isLoggedIn: !!localStorage.getItem('token'),
  },
  reducers: (create) => ({
    setModalLogin: create.reducer<{ modalLogin: boolean }>((state, action) => {
      state.modalLogin = action.payload.modalLogin
    }),
    setIsLoggedIn: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
  }),
  selectors: {
    selectModalLogin: (state) => state.modalLogin,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
})

export const appReducer = appSlice.reducer
export const { setModalLogin, setIsLoggedIn } = appSlice.actions
export const { selectModalLogin, selectIsLoggedIn } = appSlice.selectors
