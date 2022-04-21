import { configureStore } from "@reduxjs/toolkit"
import enterprises from "../reducers/enterprises"
import darkmode from "../reducers/darkmode"

export const store = configureStore({
  reducer: {
    enterprises: enterprises,
    darkmode: darkmode,
  },
})
