export interface Point {
  x: number;
  y: number;
}

export interface PointProps {
  description?: string;
  point: Point;
  color?: string;
  size?: Size;
  value: number;
  dx: number;
  dy: number;
}

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface MatrixInitialState {
  points: Point[];
  circles: PointProps[];
  yearsData: YearsData[];
}

export type FetchmatrixArgs = {
  category: string;
  orderBy: string;
  search: string;
  currentPage?: number;
};

export enum Years {
  YEARS_0_10 = "0-10",
  YEARS_10_20 = "10-20",
  YEARS_20_30 = "20-30",
  YEARS_30_40 = "30-40",
  YEARS_40_50 = "40-50",
  YEARS_50_60 = "50-60",
  YEARS_60_70 = "60-70",
  YEARS_70_80 = "70-80",
}

export interface LabelValue {
  values: string[];
  startX: number;
  startY: number;
  dx: number;
  dy: number;
  dTextX?: number;
  dTextY?: number;
  dCenterTextX?: number;
  dCenterTextY?: number;
}

export interface YearsData {
  key: Years;
  point: Point;
  staticValues: LabelValue;
  dynamicValues: LabelValue;
}
