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
  const { saved } = store.getState().theme,
    { colors } = saved;
  localStorage.setItem(
    "settings",
    JSON.stringify({
      colors: colors,
    })
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispath = () => useDispatch<AppDispatch>();
