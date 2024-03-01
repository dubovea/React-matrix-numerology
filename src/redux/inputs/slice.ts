import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DateInitial } from "./types";

const initialState: DateInitial = {
  dateString: "",
};

export const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.dateString = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCurrentDate } = inputsSlice.actions;

export default inputsSlice.reducer;
