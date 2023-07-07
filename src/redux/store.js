import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "./reducers/alert";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});
