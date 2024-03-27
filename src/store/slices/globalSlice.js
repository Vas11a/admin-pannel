import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuOpen: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const { setIsMenuOpen } = globalSlice.actions

export default globalSlice.reducer