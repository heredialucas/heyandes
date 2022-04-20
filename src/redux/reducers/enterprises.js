import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  enterprises: [],
}

export const enterprises = createSlice({
  name: "enterprises",
  initialState,
  reducers: {
    getEnterprises: (state, action) => {
      state.enterprises = [...state.enterprises, action.payload]
    },
  },
})

export const { getEnterprises } = enterprises.actions

export default enterprises.reducer
