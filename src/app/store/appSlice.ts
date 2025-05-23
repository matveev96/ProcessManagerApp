import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    modalLogin: false,
    isLoggedIn: !!localStorage.getItem('token'),
    isEditCompanyCard: false,
  },
  reducers: (create) => ({
    setModalLogin: create.reducer<{ modalLogin: boolean }>((state, action) => {
      state.modalLogin = action.payload.modalLogin
    }),
    setIsLoggedIn: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
    setIsEditCompanyCard: create.reducer<{ isEditCompanyCard: boolean }>((state, action) => {
      state.isEditCompanyCard = action.payload.isEditCompanyCard
    }),
  }),
  selectors: {
    selectModalLogin: (state) => state.modalLogin,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsEditCompanyCard: (state) => state.isEditCompanyCard,
  },
})

export const appReducer = appSlice.reducer
export const { setModalLogin, setIsLoggedIn, setIsEditCompanyCard } = appSlice.actions
export const { selectModalLogin, selectIsLoggedIn, selectIsEditCompanyCard } = appSlice.selectors
