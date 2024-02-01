import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  MatrixInitialState,
  PointProps,
  Point,
  Size,
  YearsData,
  Years,
} from "./types";
import { setCurrentDate } from "../inputs/slice";

const side = 105,
  halfSide = side / 2,
  marginX = 60,
  marginY = 45;

const settings = {
  marginX: marginX,
  marginY: marginY,
  indent: 10,
  radius: 89,
  side: side,
  indentCircleXS: 25.5,
  indentCircleS: 36.5,
  indentCircleM: 57,
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
const yearsData: YearsData[] = [
  {
    key: Years.YEARS_0_10,
    point: A,
    staticValues: {
      startX: 5,
      startY: -7,
      dx: 2.4,
      dy: 5.7,
      dCenterTextX: 1,
      dCenterTextY: 1,
      values: ["1-2", "2-3", "3-4", "5 лет", "6-7", "7-8", "8-9"],
    },
    dynamicValues: {
      startX: -2,
      startY: -7,
      dx: 2.4,
      dy: 5.7,
      dCenterTextX: -2,
      dCenterTextY: 1,
      values: [],
    },
  },
  {
    key: Years.YEARS_10_20,
    point: B,
    staticValues: {
      startX: 9,
      startY: -3,
      dx: 5.5,
      dy: 2.3,
      dTextY: 2.5,
      dCenterTextX: 1,
      dCenterTextY: 2,
      values: ["11-12", "12-13", "13-14", "15 лет", "16-17", "17-18", "18-19"],
    },
    dynamicValues: {
      startX: 5.5,
      startY: -7,
      dx: 5.5,
      dy: 2.3,
      values: [],
    },
  },
  {
    key: Years.YEARS_20_30,
    point: C,
    staticValues: {
      startX: 10,
      startY: 3.5,
      dx: 5.5,
      dy: -2.3,
      dTextX: -6,
      dTextY: 5,
      dCenterTextX: -5.5,
      dCenterTextY: 2,
      values: ["21-22", "22-23", "23-24", "25 лет", "26-27", "27-28", "28-29"],
    },
    dynamicValues: {
      startX: 10,
      startY: 2,
      dx: 5.5,
      dy: -2.3,
      values: [],
    },
  },
  {
    key: Years.YEARS_30_40,
    point: D,
    staticValues: {
      startX: 5.7,
      startY: 9,
      dx: 2.55,
      dy: -6,
      dTextX: -8,
      dTextY: 1,
      dCenterTextX: -6.8,
      dCenterTextY: 0,
      values: ["31-32", "32-33", "33-34", "35 лет", "36-37", "37-38", "38-39"],
    },
    dynamicValues: {
      startX: 6,
      startY: 9.5,
      dx: 2.55,
      dy: -6,
      values: [],
    },
  },
  {
    key: Years.YEARS_40_50,
    point: E,
    staticValues: {
      startX: -0.3,
      startY: 6,
      dx: -2.55,
      dy: -6,
      dTextX: -9,
      dTextY: 0.5,
      dCenterTextX: -6.2,
      dCenterTextY: 0.5,
      values: ["41-42", "42-43", "43-44", "45 лет", "46-47", "47-48", "48-49"],
    },
    dynamicValues: {
      startX: 0,
      startY: 6.5,
      dx: -2.55,
      dy: -6,
      values: [],
    },
  },
  {
    key: Years.YEARS_50_60,
    point: F,
    staticValues: {
      startX: -3,
      startY: 2.3,
      dx: -6,
      dy: -2.5,
      dTextX: -8,
      dTextY: -1.5,
      dCenterTextX: -6.5,
      dCenterTextY: -1,
      values: ["51-52", "52-53", "53-54", "55 лет", "56-57", "57-58", "58-59"],
    },
    dynamicValues: {
      startX: -3,
      startY: 5,
      dx: -6,
      dy: -2.5,
      dCenterTextX: 1,
      dCenterTextY: 1,
      values: [],
    },
  },
  {
    key: Years.YEARS_60_70,
    point: G,
    staticValues: {
      startX: -9,
      startY: -4.5,
      dx: -6,
      dy: 2.55,
      dCenterTextX: 1,
      dCenterTextY: -1,
      values: ["61-62", "62-63", "63-64", "65 лет", "66-67", "67-68", "68-69"],
    },
    dynamicValues: {
      startX: -15,
      startY: -1,
      dx: -6,
      dy: 2.55,
      dTextX: 2,
      dTextY: 0,
      dCenterTextY: 2,
      values: [],
    },
  },
  {
    key: Years.YEARS_70_80,
    point: H,
    staticValues: {
      startX: -1.8,
      startY: -9,
      dx: -2.55,
      dy: 6,
      values: ["71-72", "72-73", "73-74", "75 лет", "76-77", "77-78", "78-79"],
    },
    dynamicValues: {
      startX: -8,
      startY: -8,
      dx: -2.55,
      dy: 6,
      dCenterTextX: -2,
      values: [],
    },
  },
];

const initialState: MatrixInitialState = {
  points: points,
  circles: circles,
  yearsData: yearsData,
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
    valueU2 = generate(valueU + valueU1),
    valueA3 = generate(valueD + valueA1),
    valueB3 = generate(valueD + valueB1);

  let yearsData: { key: Years; values: string[] }[] = [];
  const generateYearData = (oParams: any) => {
    const value_5_year = generate(oParams.startPoint + oParams.endPoint),
      value_2_year = generate(oParams.startPoint + value_5_year),
      value_1_year = generate(oParams.startPoint + value_2_year),
      value_3_year = generate(value_2_year + value_5_year),
      value_7_year = generate(value_5_year + oParams.endPoint),
      value_8_year = generate(value_7_year + oParams.endPoint),
      value_6_year = generate(value_7_year + value_5_year);
    yearsData.push({
      key: oParams.key,
      values: [
        value_1_year.toString(),
        value_2_year.toString(),
        value_3_year.toString(),
        value_5_year.toString(),
        value_6_year.toString(),
        value_7_year.toString(),
        value_8_year.toString(),
      ],
    });
  };

  generateYearData({
    startPoint: valueA,
    endPoint: valueE,
    key: Years.YEARS_0_10,
  });
  generateYearData({
    startPoint: valueE,
    endPoint: valueB,
    key: Years.YEARS_10_20,
  });
  generateYearData({
    startPoint: valueB,
    endPoint: valueJ,
    key: Years.YEARS_20_30,
  });
  generateYearData({
    startPoint: valueJ,
    endPoint: valueV,
    key: Years.YEARS_30_40,
  });
  generateYearData({
    startPoint: valueV,
    endPoint: valueU,
    key: Years.YEARS_40_50,
  });
  generateYearData({
    startPoint: valueU,
    endPoint: valueG,
    key: Years.YEARS_50_60,
  });
  generateYearData({
    startPoint: valueG,
    endPoint: valueZ,
    key: Years.YEARS_60_70,
  });
  generateYearData({
    startPoint: valueZ,
    endPoint: valueA,
    key: Years.YEARS_70_80,
  });

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
    sum26: valueA3,
    sum27: valueB3,
    yearsData: yearsData,
  };
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentDate, (state, action: PayloadAction<Date>) => {
      const data = calculateData(action.payload);
      state.yearsData.forEach((oStaticYear) => {
        data.yearsData.forEach((oDynamicYear) => {
          if (oStaticYear.key === oDynamicYear.key) {
            oStaticYear.dynamicValues.values = oDynamicYear.values;
          }
        });
      });
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
          description: "Точка А3",
          point: A,
          value: data.sum26,
          color: "green",
          size: Size.SMALL,
          dx: settings.indentCircleM,
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
          description: "Точка Б3",
          point: C,
          value: data.sum27,
          color: "green",
          size: Size.SMALL,
          dx: 0,
          dy: settings.indentCircleM,
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
          value: data.sum19,
          color: "black",
          size: Size.MEDIUM,
          dx: 8,
          dy: 8,
        },
        {
          description: "Точка E1",
          point: rectA,
          value: data.sum18,
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
