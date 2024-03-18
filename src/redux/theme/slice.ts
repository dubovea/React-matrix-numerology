import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Colors,
  SettingsColor,
  SettingsInitialState,
  UpdateColor,
} from "./types";
import { getLocalStorageColors } from "../../utils/localStorageAPI";

const { colors } = getLocalStorageColors();

const initialColors: SettingsColor = {
  backgroundColor: "#171717",
  colorLines: "#eadeb6",
  colorLinesTable: "#eadeb6",
  colorIconHeart: "#eadeb6",
  colorIconDollar: "#eadeb6",
};

const colorSettings: SettingsColor = {
  backgroundColor: colors?.backgroundColor ?? initialColors.backgroundColor,
  colorLines: colors?.colorLines ?? initialColors.colorLines,
  colorLinesTable: colors?.colorLinesTable ?? initialColors.colorLinesTable,
  colorIconHeart: colors?.colorIconHeart ?? initialColors.colorIconHeart,
  colorIconDollar: colors?.colorIconDollar ?? initialColors.colorIconDollar,
};

const initialState: SettingsInitialState = {
  temp: {
    colors: colorSettings,
    borders: {},
  },
  saved: {
    colors: colorSettings,
    borders: {},
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    resetSettings: (state) => {
      state.temp.colors = initialColors;
      state.saved = state.temp;
    },
    saveSettings: (state) => {
      state.saved = state.temp;
    },
    updateColor: (state, action: PayloadAction<UpdateColor>) => {
      state.temp.colors[action.payload.field] = action.payload.color;
    },
  },
  extraReducers: () => {},
});
export const { updateColor, resetSettings, saveSettings } = themeSlice.actions;
export default themeSlice.reducer;
