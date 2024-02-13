import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ColorInitialState } from "./types";
import { getLocalStorageColors } from "../../utils/localStorageAPI";

const oSettings = getLocalStorageColors();
const initialState: ColorInitialState = {
  backgroundColor: oSettings?.backgroundColor ?? "#001529",
  colorLines: oSettings?.colorLines ?? "#eadeb6",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setColorLine: (state, action: PayloadAction<string>) => {
      state.colorLines = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setBackgroundColor, setColorLine } = themeSlice.actions;
export default themeSlice.reducer;
