import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ReaderState {
  name: string,
  phone: string,
  address: string,
  email: string
}

const initialState: ReaderState = {
  name: '',
  phone: '',
  address: '',
  email: ''
}

export const readerSlice = createSlice({
  name: 'reader',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    updateAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateName, updatePhone, updateAddress, updateEmail } = readerSlice.actions

export default readerSlice.reducer