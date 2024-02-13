import { configureStore } from "@reduxjs/toolkit";
import matrix from "./matrix/slice";
import inputs from "./inputs/slice";
import theme from "./theme/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    matrix,
    inputs,
    theme,
  },
});

store.subscribe(() => {
  const { backgroundColor, colorLines } = store.getState().theme;
  localStorage.setItem(
    "color",
    JSON.stringify({
      backgroundColor: backgroundColor,
      colorLines: colorLines,
    })
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispath = () => useDispatch<AppDispatch>();
