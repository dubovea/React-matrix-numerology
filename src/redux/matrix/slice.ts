import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MatrixInitialState, PointProps, Point, Size } from "./types";
import { setCurrentDate } from "../inputs/slice";

const side = 105,
  halfSide = side / 2,
  marginX = 60,
  marginY = 95;

const settings = {
  marginX: marginX,
  marginY: marginY,
  indent: 10,
  radius: 89,
  side: side,
  indentCircleXS: 25.5,
  indentCircleS: 36.5,
  indentCircleM: 60,
  halfSide: halfSide,
  centerX: marginX + halfSide,
  centerY: marginY + halfSide,
};

const Center = {
  x: settings.centerX,
  y: settings.centerY,
};

//Точка А (крайняя левая)
const A = {
  x: Center.x - settings.radius,
  y: Center.y,
};

//Точка B (левая верхняя под углом 45 градусов)
const B = {
  x: settings.marginX - settings.indent,
  y: marginY - settings.indent,
};

//Точка C (верхняя по центру)
const C = {
  x: Center.x,
  y: Center.y - settings.radius,
};

//Точка D (правая верхняя под углом 45 градусов)
const D = {
  x: settings.marginX + side + settings.indent,
  y: B.y,
};

//Точка E (крайняя правая)
const E = {
  x: Center.x + settings.radius,
  y: Center.y,
};

//Точка F (правая нижняя под углом -45 градусов)
const F = {
  x: D.x,
  y: marginY + side + settings.indent,
};

//Точка H (левая нижняя под углом -45 градусов)
const H = {
  x: B.x,
  y: F.y,
};

//Точка G (нижняя по центру)
const G = {
  x: Center.x,
  y: Center.y + settings.radius,
};

const points: Point[] = [A, B, C, D, E, F, H, G];
const circles: PointProps[] = [];

const initialState: MatrixInitialState = {
  points: points,
  circles: circles,
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentDate, (state, action: PayloadAction<Date>) => {
      state.circles = [
        {
          description: "Точка А",
          point: A,
          value: `${action.payload.getDate()}`,
          color: "sandy",
          size: Size.LARGE,
          dx: 9,
          dy: 0,
        },
      ];
    });
  },
});

export default matrixSlice.reducer;
