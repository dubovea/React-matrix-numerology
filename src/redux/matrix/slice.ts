import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MatrixGroups, Size } from "./types";
import { setCurrentDate } from "../inputs/slice";
const largeCircles = [
  {
    description: "Точка А",
    point: {
      x: 10,
      y: 22,
    },
    value: "91",
    color: "sandy",
    size: Size.LARGE,
    dx: 0,
    dy: 0,
  },
];

const initialState: MatrixGroups = {
  largeCircles: largeCircles,
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentDate, (state, action: PayloadAction<Date>) => {
      debugger;
      state.largeCircles = [
        {
          description: "Точка А",
          point: {
            x: 10,
            y: 22,
          },
          value: `${action.payload.getDate()}`,
          color: "sandy",
          size: Size.LARGE,
          dx: 0,
          dy: 0,
        },
      ];
    });
  },
});

export default matrixSlice.reducer;
