import { AlertStatus } from "@/utils/constants";

const { createSlice } = require("@reduxjs/toolkit");

const alertSlice = createSlice({
  name: "alertSlice",
  initialState: {
    alertMessage: "",
    status: AlertStatus.Success,
    isOpen: false,
  },
  reducers: {
    openAlert(state, action) {
      state.alertMessage = action.payload.message;
      state.status = action.payload.status;
      state.isOpen = true;
    },
    closeAlert(state) {
      state.isOpen = false;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
