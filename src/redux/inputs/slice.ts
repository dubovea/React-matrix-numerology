import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DateInitial } from "./types";

const initialState: DateInitial = {
  dateValue: new Date()
};

export const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<Date>) => {
      state.dateValue = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCurrentDate} = inputsSlice.actions;

export default inputsSlice.reducer;
