import { configureStore } from "@reduxjs/toolkit";
import matrix from "./matrix/slice";
import inputs from "./inputs/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    matrix,
    inputs,
  },
});

store.subscribe(() => {
  // const { items, totalPrice } = store.getState().matrix;
  // localStorage.setItem('items', JSON.stringify(items));
  // localStorage.setItem('totalPrice', totalPrice.toString());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispath = () => useDispatch<AppDispatch>();
