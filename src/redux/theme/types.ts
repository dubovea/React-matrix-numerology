import { Color } from "antd/es/color-picker";

export interface SettingsInitialState {
  temp: SettingsMerged;
  saved: SettingsMerged;
}

export interface SettingsMerged {
  colors: SettingsColor;
  borders: SettingsBorder;
}

export interface SettingsColor {
  backgroundColor: string;
  colorLines: string;
  colorLinesTable: string;
  colorIconHeart: string;
  colorIconDollar: string;
}

export interface SettingsBorder {}

export interface UpdateColor {
  field: keyof typeof Colors;
  color: string;
}

export enum Colors {
  backgroundColor = "backgroundColor",
  colorLines = "colorLines",
  colorLinesTable = "colorLinesTable",
  colorIconHeart = "colorIconHeart",
  colorIconDollar = "colorIconDollar",
}

export interface CustomColorPickerProps {
  onChange?: (field: Colors, color: Color) => void;
}
