interface Point {
  x: number;
  y: number;
}

interface PointProps {
  description?: string;
  point: Point;
  color?: string;
  size?: Size;
  value: string;
  dx: number;
  dy: number;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface MatrixGroups {
  largeCircles: PointProps[];
}

export type FetchmatrixArgs = {
  category: string;
  orderBy: string;
  search: string;
  currentPage?: number;
};
