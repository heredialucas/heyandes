import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  darkmode: false,
}

export const darkmode = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    onDarkmode: (state, action) => {
      state.darkmode = state.darkmode ? !action.payload : action.payload
    },
  },
})

export const { onDarkmode } = darkmode.actions

export default darkmode.reducer
