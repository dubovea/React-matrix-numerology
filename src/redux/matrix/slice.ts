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

//Внутренний радиус квадрата
const rectA = {
  x: marginX,
  y: marginY,
};
const rectB = {
  x: marginX + side,
  y: marginY,
};
const rectC = {
  x: marginX,
  y: marginY + side,
};
const rectD = {
  x: marginX + side,
  y: marginY + side,
};

const points: Point[] = [A, B, C, D, E, F, H, G];
const circles: PointProps[] = [];

const initialState: MatrixInitialState = {
  points: points,
  circles: circles,
};

const calculateData = (date: Date) => {
  const generate = (value: number) => {
    if (+value > 22) {
      return value
        .toString()
        .split("")
        .reduce((acc, val) => (acc += +val), 0);
    }
    return +value;
  };

  const valueA = generate(date.getDate()),
    valueB = date.getMonth() + 1,
    valueV = generate(date.getFullYear()),
    valueG = generate(valueA + valueB + valueV),
    valueD = generate(valueA + valueB + valueV + valueG),
    valueE = generate(valueA + valueB),
    valueJ = generate(valueB + valueV),
    valueU = generate(valueV + valueG),
    valueZ = generate(valueA + valueG),
    valueK = generate(valueD + valueG),
    valueL = generate(valueD + valueV),
    valueM = generate(valueK + valueL),
    valueN = generate(valueK + valueM),
    valueO = generate(valueL + valueM),
    valueA1 = generate(valueA + valueD),
    valueA2 = generate(valueA + valueA1),
    valueB1 = generate(valueB + valueD),
    valueB2 = generate(valueB + valueB1),
    valueV2 = generate(valueV + valueL),
    valueG2 = generate(valueG + valueK),
    strength = generate(valueE + valueJ + valueU + valueZ),
    valueE1 = generate(valueE + strength),
    valueE2 = generate(valueE + valueE1),
    valueJ1 = generate(valueJ + strength),
    valueJ2 = generate(valueJ + valueJ1),
    valueZ1 = generate(valueZ + strength),
    valueZ2 = generate(valueZ + valueZ1),
    valueU1 = generate(valueU + strength),
    valueU2 = generate(valueU + valueU1);
  return {
    dd: valueA,
    mm: valueB,
    yyyy: valueV,
    sum1: valueG,
    sum2: valueD,
    sum3: valueE,
    sum4: valueJ,
    sum5: valueU,
    sum6: valueZ,
    sum7: valueK,
    sum8: valueL,
    sum9: valueM,
    sum10: valueN,
    sum11: valueO,
    sum12: valueA1,
    sum13: valueA2,
    sum14: valueB1,
    sum15: valueB2,
    sum16: valueV2,
    sum17: valueG2,
    sum18: valueE1,
    sum19: valueE2,
    sum20: valueJ1,
    sum21: valueJ2,
    sum22: valueZ1,
    sum23: valueZ2,
    sum24: valueU1,
    sum25: valueU2,
  };
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentDate, (state, action: PayloadAction<Date>) => {
      const data = calculateData(action.payload);
      state.circles = [
        {
          description: "Точка А",
          point: A,
          value: data.dd,
          color: "purple",
          size: Size.LARGE,
          dx: 9,
          dy: 0,
        },
        {
          description: "Точка А2",
          point: A,
          value: data.sum13,
          color: "blue",
          size: Size.MEDIUM,
          dx: settings.indentCircleXS,
          dy: 0,
        },
        {
          description: "Точка А1",
          point: A,
          value: data.sum12,
          color: "lightblue",
          size: Size.SMALL,
          dx: settings.indentCircleS,
          dy: 0,
        },
        {
          description: "Точка Б",
          point: C,
          value: data.mm,
          color: "purple",
          size: Size.LARGE,
          dx: 0,
          dy: 9,
        },
        {
          description: "Точка Б2",
          point: C,
          value: data.sum15,
          color: "blue",
          size: Size.MEDIUM,
          dx: 0,
          dy: settings.indentCircleXS,
        },
        {
          description: "Точка Б1",
          point: C,
          value: data.sum14,
          color: "lightblue",
          size: Size.SMALL,
          dx: 0,
          dy: settings.indentCircleS,
        },
        {
          description: "Точка В",
          point: E,
          value: data.yyyy,
          color: "burgundy",
          size: Size.LARGE,
          dx: -9,
          dy: 0,
        },
        {
          description: "Точка В2",
          point: E,
          value: data.sum16,
          color: "black",
          size: Size.MEDIUM,
          dx: -settings.indentCircleXS,
          dy: 0,
        },
        {
          description: "Точка Л (В1)",
          point: E,
          value: data.sum8,
          color: "orange",
          size: Size.SMALL,
          dx: -settings.indentCircleS,
          dy: 0,
        },
        {
          description: "Точка Г",
          point: G,
          value: data.sum1,
          color: "burgundy",
          size: Size.LARGE,
          dx: 0,
          dy: -9,
        },
        {
          description: "Точка Г2",
          point: G,
          value: data.sum17,
          color: "black",
          size: Size.MEDIUM,
          dx: 0,
          dy: -settings.indentCircleXS,
        },
        {
          description: "Точка К (Г1)",
          point: G,
          value: data.sum7,
          color: "orange",
          size: Size.SMALL,
          dx: 0,
          dy: -settings.indentCircleS,
        },
        {
          description: "Точка Д",
          point: Center,
          value: data.sum2,
          color: "sandy",
          size: Size.LARGE,
          dx: 0,
          dy: 0,
        },
        {
          description: "Точка E",
          point: B,
          value: data.sum3,
          size: Size.LARGE,
          dx: 6,
          dy: 7,
        },
        {
          description: "Точка E2",
          point: rectA,
          value: data.sum18,
          color: "black",
          size: Size.MEDIUM,
          dx: 8,
          dy: 8,
        },
        {
          description: "Точка E1",
          point: rectA,
          value: data.sum19,
          color: "black",
          size: Size.SMALL,
          dx: 15.5,
          dy: 15.5,
        },
        {
          description: "Точка Ж",
          point: D,
          value: data.sum4,
          size: Size.LARGE,
          dx: -6,
          dy: 7,
        },
        {
          description: "Точка Ж2",
          point: rectB,
          value: data.sum21,
          color: "black",
          size: Size.MEDIUM,
          dx: -8,
          dy: 8,
        },
        {
          description: "Точка Ж1",
          point: rectB,
          value: data.sum20,
          color: "black",
          size: Size.SMALL,
          dx: -15.5,
          dy: 15.5,
        },
        {
          description: "Точка И",
          point: F,
          value: data.sum5,
          size: Size.LARGE,
          dx: -6,
          dy: -7,
        },
        {
          description: "Точка И2",
          point: rectD,
          value: data.sum25,
          color: "black",
          size: Size.MEDIUM,
          dx: -8,
          dy: -8,
        },
        {
          description: "Точка И1",
          point: rectD,
          value: data.sum24,
          color: "black",
          size: Size.SMALL,
          dx: -15.5,
          dy: -15.5,
        },
        {
          description: "Точка М",
          point: rectD,
          value: data.sum9,
          color: "black",
          size: Size.SMALL,
          dx: -30,
          dy: -30,
        },
        {
          description: "Точка Н",
          point: rectD,
          value: data.sum10,
          color: "black",
          size: Size.SMALL,
          dx: -34,
          dy: -18,
        },
        {
          description: "Точка О",
          point: rectD,
          value: data.sum11,
          color: "black",
          size: Size.SMALL,
          dx: -18,
          dy: -34,
        },
        {
          description: "Точка З",
          point: H,
          value: data.sum6,
          size: Size.LARGE,
          dx: 6,
          dy: -7,
        },
        {
          description: "Точка E2",
          point: rectC,
          value: data.sum23,
          color: "black",
          size: Size.MEDIUM,
          dx: 8,
          dy: -8,
        },
        {
          description: "Точка E1",
          point: rectC,
          value: data.sum22,
          color: "black",
          size: Size.SMALL,
          dx: 15.5,
          dy: -15.5,
        },
      ];
    });
  },
});

export default matrixSlice.reducer;
