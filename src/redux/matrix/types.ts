export interface Point {
  x: number;
  y: number;
}


export interface PointProps {
  description?: string;
  point: Point;
  color?: string;
  size?: Size;
  value: string;
  dx: number;
  dy: number;
}

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface MatrixInitialState {
  points: Point[],
  circles: PointProps[];
}

export type FetchmatrixArgs = {
  category: string;
  orderBy: string;
  search: string;
  currentPage?: number;
};
