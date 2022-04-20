import { configureStore } from "@reduxjs/toolkit"
import enterprises from "../reducers/enterprises"

export const store = configureStore({
  reducer: {
    enterprises: enterprises,
  },
})
