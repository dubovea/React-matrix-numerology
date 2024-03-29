import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  MatrixInitialState,
  PointProps,
  Size,
  YearsData,
  Years,
  Points,
} from "./types";
import { setCurrentDate } from "../inputs/slice";
import moment from "moment";

const side = 105,
  halfSide = side / 2,
  marginX = 60,
  marginY = 45;

const settings = {
  marginX: marginX,
  marginY: marginY,
  indent: 10,
  radius: 89,
  innerRadius: halfSide - 5.1,
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

const K = {
  x: Center.x,
  y: Center.y + settings.innerRadius,
};

const L = {
  x: Center.x + settings.innerRadius,
  y: Center.y,
};

//Точка центер вращения 2 квадрата
const Center1 = {
  x: Center.x,
  y: Center.y - Math.sqrt((side * side) / 2),
};

const points: Points = {
  Center: Center,
  A: A,
  B: B,
  C: C,
  D: D,
  E: E,
  F: F,
  H: H,
  G: G,
  K: K,
  L: L,
  Center1: Center1,
};

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
      startX: -1,
      startY: -7,
      dx: 2.4,
      dy: 5.7,
      dCenterTextX: -2.5,
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
      startY: -6,
      dx: 5.5,
      dy: 2.3,
      dCenterTextX: -1,
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
  properties: {
    side: side,
    innerRadius: settings.innerRadius,
  },
  points: points,
  circles: circles,
  yearsData: yearsData,
  tableData: [],
  infoData: {
    pointSky: 0,
    pointEarth: 0,
    pointSkyEarth: 0,
    pointMan: 0,
    pointWoman: 0,
    pointManWoman: 0,
    pointSpirit: 0,
    pointPlanet: 0,
    dateBirth: "",
    age: 0,
    dayOfWeek: "",
    manCode: "",
    womanCode: "",
    strengthFamily: 0,
    codeStrength: "",
  },
};

const generate = (value: number): number => {
  if (value <= 22) {
    return +value;
  }
  return generate(
    value
      .toString()
      .split("")
      .reduce((acc, val) => (acc += +val), 0)
  );
};

const calculateData = (date: Date) => {
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
    valueB3 = generate(valueD + valueB1),
    valueSky = generate(valueB + valueG),
    valueEarth = generate(valueA + valueV),
    valueMan = generate(valueE + valueU),
    valueWoman = generate(valueJ + valueZ);
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
    valueD: valueD,
    valueE: valueE,
    valueJ: valueJ,
    valueU: valueU,
    valueZ: valueZ,
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
    strength: strength,
    valueSky: valueSky,
    valueEarth: valueEarth,
    valueMan: valueMan,
    valueWoman: valueWoman,
  };
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentDate, (state, action: PayloadAction<string>) => {
      const dateString = action.payload;
      if (!dateString) {
        return initialState;
      }
      const dateValue = moment(dateString, "DD.MM.YYYY").toDate(),
        data = calculateData(dateValue);
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
          label: `${data.dd}`,
          color: "purple",
          size: Size.LARGE,
          dx: 9,
          dy: 0,
        },
        {
          description: "Точка А2",
          point: A,
          label: `${data.sum13}`,
          color: "blue",
          size: Size.MEDIUM,
          dx: settings.indentCircleXS,
          dy: 0,
        },
        {
          description: "Точка А1",
          point: A,
          label: `${data.sum12}`,
          color: "lightblue",
          size: Size.SMALL,
          dx: settings.indentCircleS,
          dy: 0,
        },
        {
          description: "Точка А3",
          point: A,
          label: `${data.sum26}`,
          color: "green",
          size: Size.SMALL,
          dx: settings.indentCircleM,
          dy: 0,
        },
        {
          description: "Точка Б",
          point: C,
          label: `${data.mm}`,
          color: "purple",
          size: Size.LARGE,
          dx: 0,
          dy: 9,
        },
        {
          description: "Точка Б2",
          point: C,
          label: `${data.sum15}`,
          color: "blue",
          size: Size.MEDIUM,
          dx: 0,
          dy: settings.indentCircleXS,
        },
        {
          description: "Точка Б1",
          point: C,
          label: `${data.sum14}`,
          color: "lightblue",
          size: Size.SMALL,
          dx: 0,
          dy: settings.indentCircleS,
        },
        {
          description: "Точка Б3",
          point: C,
          label: `${data.sum27}`,
          color: "green",
          size: Size.SMALL,
          dx: 0,
          dy: settings.indentCircleM,
        },
        {
          description: "Точка В",
          point: E,
          label: `${data.yyyy}`,
          color: "burgundy",
          size: Size.LARGE,
          dx: -9,
          dy: 0,
        },
        {
          description: "Точка В2",
          point: E,
          label: `${data.sum16}`,
          color: "black",
          size: Size.MEDIUM,
          dx: -settings.indentCircleXS,
          dy: 0,
        },
        {
          description: "Точка Л (В1)",
          point: E,
          label: `${data.sum8}`,
          color: "orange",
          size: Size.SMALL,
          dx: -settings.indentCircleS,
          dy: 0,
        },
        {
          description: "Точка Г",
          point: G,
          label: `${data.sum1}`,
          color: "burgundy",
          size: Size.LARGE,
          dx: 0,
          dy: -9,
        },
        {
          description: "Точка Г2",
          point: G,
          label: `${data.sum17}`,
          color: "black",
          size: Size.MEDIUM,
          dx: 0,
          dy: -settings.indentCircleXS,
        },
        {
          description: "Точка К (Г1)",
          point: G,
          label: `${data.sum7}`,
          color: "orange",
          size: Size.SMALL,
          dx: 0,
          dy: -settings.indentCircleS,
        },
        {
          description: "Точка Д",
          point: Center,
          label: `${data.valueD}`,
          color: "sandy",
          size: Size.LARGE,
          dx: 0,
          dy: 0,
        },
        {
          description: "Точка E",
          point: B,
          label: `${data.valueE}`,
          size: Size.LARGE,
          dx: 6,
          dy: 7,
        },
        {
          description: "Точка E2",
          point: rectA,
          label: `${data.sum19}`,
          color: "black",
          size: Size.MEDIUM,
          dx: 8,
          dy: 8,
        },
        {
          description: "Точка E1",
          point: rectA,
          label: `${data.sum18}`,
          color: "black",
          size: Size.SMALL,
          dx: 15.5,
          dy: 15.5,
        },
        {
          description: "Точка Ж",
          point: D,
          label: `${data.valueJ}`,
          size: Size.LARGE,
          dx: -6,
          dy: 7,
        },
        {
          description: "Точка Ж2",
          point: rectB,
          label: `${data.sum21}`,
          color: "black",
          size: Size.MEDIUM,
          dx: -8,
          dy: 8,
        },
        {
          description: "Точка Ж1",
          point: rectB,
          label: `${data.sum20}`,
          color: "black",
          size: Size.SMALL,
          dx: -15.5,
          dy: 15.5,
        },
        {
          description: "Точка И",
          point: F,
          label: `${data.valueU}`,
          size: Size.LARGE,
          dx: -6,
          dy: -7,
        },
        {
          description: "Точка И2",
          point: rectD,
          label: `${data.sum25}`,
          color: "black",
          size: Size.MEDIUM,
          dx: -8,
          dy: -8,
        },
        {
          description: "Точка И1",
          point: rectD,
          label: `${data.sum24}`,
          color: "black",
          size: Size.SMALL,
          dx: -15.5,
          dy: -15.5,
        },
        {
          description: "Точка М",
          point: rectD,
          label: `${data.sum9}`,
          color: "black",
          size: Size.SMALL,
          dx: -28.5,
          dy: -28.5,
        },
        {
          description: "Точка Н",
          point: rectD,
          label: `${data.sum10}`,
          color: "black",
          size: Size.SMALL,
          dx: -32,
          dy: -16,
        },
        {
          description: "Точка О",
          point: rectD,
          label: `${data.sum11}`,
          color: "black",
          size: Size.SMALL,
          dx: -16,
          dy: -32,
        },
        {
          description: "Точка М (маленькая)",
          point: rectD,
          label: "М",
          color: "white",
          textColor: "black",
          size: Size.LITTLE,
          dx: -33,
          dy: -33,
        },
        {
          description: "Точка Н (маленькая)",
          point: rectD,
          label: "Н",
          color: "white",
          textColor: "black",
          size: Size.LITTLE,
          dx: -36.5,
          dy: -20.5,
        },
        {
          description: "Точка О (маленькая)",
          point: rectD,
          label: "О",
          color: "white",
          textColor: "black",
          size: Size.LITTLE,
          dx: -20.5,
          dy: -36.5,
        },
        {
          description: "Точка З",
          point: H,
          label: `${data.valueZ}`,
          size: Size.LARGE,
          dx: 6,
          dy: -7,
        },
        {
          description: "Точка З2",
          point: rectC,
          label: `${data.sum23}`,
          color: "black",
          size: Size.MEDIUM,
          dx: 8,
          dy: -8,
        },
        {
          description: "Точка З1",
          point: rectC,
          label: `${data.sum22}`,
          color: "black",
          size: Size.SMALL,
          dx: 15.5,
          dy: -15.5,
        },
        {
          description: "Точка К (маленькая)",
          point: K,
          label: "K",
          color: "orange",
          size: Size.LITTLE,
          dy: -2,
        },
        {
          description: "Точка Л (маленькая)",
          point: L,
          label: "Л",
          color: "orange",
          size: Size.LITTLE,
          dx: -2,
        },
        {
          description: "Точка Д (маленькая)",
          point: Center,
          label: "Д",
          color: "sandy",
          size: Size.LITTLE_1,
          dy: 12,
          arrowProps: {
            orient: 270,
            label: "ЗОНА КОМФОРТА",
          },
        },
      ];

      const resultChakra7 = generate(data.dd + data.mm),
        resultChakra6 = generate(data.sum13 + data.sum15),
        resultChakra5 = generate(data.sum12 + data.sum14),
        resultChakra4 = generate(data.sum26 + data.sum27),
        resultChakra3 = generate(data.valueD + data.valueD),
        resultChakra2 = generate(data.sum8 + data.sum7),
        resultChakra1 = generate(data.yyyy + data.sum1);
      state.tableData = [
        {
          key: "1",
          backgroundColor: "#5d3a8a",
          physics: data.dd,
          energy: data.mm,
          emotions: resultChakra7,
          chakra: {
            label: "Сахасрара",
            tooltip:
              "Отвечает за состояние волос, мозга и верхней части черепа.",
          },
        },
        {
          key: "2",
          backgroundColor: "#343e6f",
          physics: data.sum13,
          energy: data.sum15,
          emotions: resultChakra6,
          chakra: {
            label: "Аджна",
            tooltip:
              "Отвечает за состояние глаз, ушей, лица, щитовидки, плечей и рук.",
          },
        },
        {
          key: "3",
          backgroundColor: "#74a3ab",
          physics: data.sum12,
          energy: data.sum14,
          emotions: resultChakra5,
          chakra: {
            label: "Вишудха",
            tooltip:
              "Отвечает за состояние горла, нижней челюсти, щитовидки, плечей и рук.",
          },
        },
        {
          key: "4",
          backgroundColor: "#4c8656",
          physics: data.sum26,
          energy: data.sum27,
          emotions: resultChakra4,
          chakra: {
            label: "Анахата",
            tooltip:
              "Отвечает за состояние сердца, легких, бронхов, ребер и груди.",
          },
        },
        {
          key: "5",
          backgroundColor: "#e2bc76",
          physics: data.valueD,
          energy: data.valueD,
          emotions: resultChakra3,
          chakra: {
            label: "Манипура",
            tooltip:
              "Отвечает за состояние середины позвоночника, ЖКЕ и печени.",
          },
        },
        {
          key: "6",
          backgroundColor: "#a34924",
          physics: data.sum8,
          energy: data.sum7,
          emotions: resultChakra2,
          chakra: {
            label: "Свадхистана",
            tooltip:
              "Отвечает за состояние почек, толстого кишечника, надпочечников и половых органов.",
          },
        },
        {
          key: "7",
          backgroundColor: "#6a3432",
          physics: data.yyyy,
          energy: data.sum1,
          emotions: resultChakra1,
          chakra: {
            label: "Муладхара",
            tooltip:
              "Отвечает за состояние ног, ануса, крестеца и мочеполовой системы.",
          },
        },
        {
          key: "8",
          backgroundColor: "black",
          physics: generate(
            data.dd +
              data.sum13 +
              data.sum12 +
              data.sum26 +
              data.valueD +
              data.sum8 +
              data.yyyy
          ),
          energy: generate(
            data.mm +
              data.sum15 +
              data.sum14 +
              data.sum27 +
              data.valueD +
              data.sum7 +
              data.sum1
          ),
          emotions: generate(
            resultChakra1 +
              resultChakra2 +
              resultChakra3 +
              resultChakra4 +
              resultChakra5 +
              resultChakra6 +
              resultChakra7
          ),
          chakra: {
            label: "ИТОГО",
            tooltip:
              "Отвечает за состояние костной, лимфатической, кровеносной систем и за лишний вес.",
          },
          result: true,
        },
      ];

      let dayOfWeek = dateValue.toLocaleString("ru-RU", {
        weekday: "long",
      });
      const pointSkyEarth = generate(data.valueSky + data.valueEarth),
        pointManWoman = generate(data.valueMan + data.valueWoman),
        pointSpirit = generate(pointSkyEarth + pointManWoman);
      state.infoData = {
        pointSky: data.valueSky,
        pointEarth: data.valueEarth,
        pointSkyEarth: pointSkyEarth,
        pointMan: data.valueMan,
        pointWoman: data.valueWoman,
        pointManWoman: pointManWoman,
        pointSpirit: pointSpirit,
        pointPlanet: generate(pointManWoman + pointSpirit),
        dateBirth: dateValue.toLocaleDateString(),
        age: new Date().getFullYear() - dateValue.getFullYear(),
        dayOfWeek: dayOfWeek[0].toUpperCase() + dayOfWeek.substring(1),
        manCode: `${data.valueE}, ${data.valueU}, ${generate(
          data.valueE + data.valueU
        )}`,
        womanCode: `${data.valueJ}, ${data.valueZ}, ${generate(
          data.valueJ + data.valueZ
        )}`,
        strengthFamily: data.strength,
        codeStrength: `${data.valueD}, ${data.strength}, ${generate(
          data.valueD + data.strength
        )}`,
      };
    });
  },
});

export default matrixSlice.reducer;
