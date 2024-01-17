import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface PointProps {
  point: Point;
  color?: string;
  size?: string;
  value: string;
  dx: number;
  dy: number;
}

interface CircleProps {
  point: Point;
  color?: string;
  textColor?: string;
  size?: string;
  leftSide?: boolean;
  value: string;
  label: string;
  dx: number;
  dy: number;
}

interface TextProps {
  point: Point;
  drawCircle: boolean;
  value: string;
  startX: number;
  startY: number;
  dx: number;
  dy: number;
  dTextX?: number;
  dTextY?: number;
  dCenterTextX?: number;
  dCenterTextY?: number;
}

const Matrix: React.FC = () => {
  const marginX = 60;
  const marginY = 95;

  const indent = 10;
  const radius = 89;
  const side = 105;

  const indentCircleXS = 25.5;
  const indentCircleS = 36.5;
  const indentCircleM = 60;

  const halfSide = side / 2;
  const centerX = marginX + halfSide;
  const centerY = marginY + halfSide;

  const svgRef = useRef<any | null>();

  useEffect(() => {
    const $svgRef = svgRef.current;
    if (!svgRef) return;

    $svgRef.innerHTML = "";

    const drawLine = (points: Point[]) => {
      const line = document.createElementNS(svgns, "path");
      const path = points
        .map((p: Point, i: Number) => {
          if (i === 0) {
            return `M ${p.x} ${p.y}`;
          }
          return `L ${p.x} ${p.y}`;
        })
        .join(" ");
      line.setAttribute("d", `${path} Z`);
      line.setAttribute("class", "matrix-line line");
      $svgRef.append(line);
    };

    const drawCircle = (props: PointProps) => {
      const group = document.createElementNS(svgns, "g");
      const circle = document.createElementNS(svgns, "circle");
      const text = document.createElementNS(svgns, "text");
      const sSizeClassText = props.size ? `${props.size}-text` : "large-text";
      const sSizeClassCircle = props.size
        ? `${props.size}-circle`
        : "large-circle";
      const sClassCircle = props.color
        ? `${sSizeClassCircle} ${props.color}-circle`
        : `${sSizeClassCircle} black-circle`;
      text.textContent = props.value.toString();
      text.setAttribute("class", `matrix-value-point ${sSizeClassText}`);
      text.setAttribute("dy", ".1em");
      text.setAttribute("x", (props.point.x + props.dx).toString());
      text.setAttribute("y", (props.point.y + props.dy).toString());

      circle.setAttribute("cx", (props.point.x + props.dx).toString());
      circle.setAttribute("cy", (props.point.y + props.dy).toString());
      circle.setAttribute("style", "r: var(--radius);");
      circle.setAttribute("class", sClassCircle);

      group.append(circle);
      group.append(text);
      $svgRef.append(group);
    };
    const drawCircleWithArrow = (props: CircleProps) => {
      const group = document.createElementNS(svgns, "g");
      const circle = document.createElementNS(svgns, "circle");
      const text = document.createElementNS(svgns, "text");

      const group2 = document.createElementNS(svgns, "g");
      const text2 = document.createElementNS(svgns, "text");
      const line = document.createElementNS(svgns, "line");
      const polygon = document.createElementNS(svgns, "polygon");

      const sSizeClassText = props.size ? `${props.size}-text` : "large-text",
        sColorClassText = props.textColor
          ? `${props.textColor}-text`
          : "white-text",
        sSizeClassCircle = props.size ? `${props.size}-circle` : "large-circle",
        sClassCircle = props.color
          ? `${sSizeClassCircle} ${props.color}-circle`
          : `${sSizeClassCircle} black-circle`,
        sClassLine = `${props.color}-circle small-arrow`;

      const xCoordinate: number = props.point.x + props.dx,
        yCoordinate: number = props.point.y + props.dy;

      text.textContent = props.value.toString();
      text.setAttribute(
        "class",
        `matrix-value-point ${sSizeClassText} ${sColorClassText}`
      );
      text.setAttribute("dy", ".1em");
      text.setAttribute("x", xCoordinate.toString());
      text.setAttribute("y", yCoordinate.toString());

      circle.setAttribute("cx", xCoordinate.toString());
      circle.setAttribute("cy", yCoordinate.toString());
      circle.setAttribute("style", "r: var(--radius);");
      circle.setAttribute("class", sClassCircle);

      polygon.setAttribute("class", sClassLine);
      line.setAttribute("x1", (xCoordinate - 1).toString());
      line.setAttribute("y1", yCoordinate.toString());
      line.setAttribute("x2", (xCoordinate - 6).toString());
      line.setAttribute("y2", yCoordinate.toString());
      line.setAttribute("class", sClassLine);

      text2.textContent = props.label;
      text2.setAttribute("class", "matrix-label-bold");
      text2.setAttribute("dx", "-22");
      text2.setAttribute("dy", (props.dy + 1).toString());
      text2.setAttribute("x", props.point.x.toString());
      text2.setAttribute("y", props.point.y.toString());

      polygon.setAttribute(
        "points",
        `${props.point.x - 11} ${yCoordinate} 
          ${props.point.x - 9} ${yCoordinate + 1} 
           ${props.point.x - 10} ${yCoordinate} 
           ${props.point.x - 9} ${yCoordinate - 1}
           ${props.point.x - 11} ${yCoordinate}`
      );
      group.append(circle);
      group.append(text);

      group2.append(text2);
      group2.append(line);
      group2.append(polygon);
      group.append(group2);
      $svgRef.append(group);
    };

    const drawLabel = (props: TextProps) => {
      let dx = props.startX,
        dy = props.startY;
      for (let i = +props.value - 9; i < +props.value - 1; i++) {
        if ((i + 1) % 5 === 0) {
          continue;
        }
        const group = document.createElementNS(svgns, "g");
        const text = document.createElementNS(svgns, "text");
        const isCenteredText: boolean = i % 5 === 0 && props.drawCircle;
        let sClassText = "matrix-label";
        let sClassCircle = "matrix-label-circle";

        dx += props.dx;
        dy -= props.dy;

        if (isCenteredText) {
          text.textContent = `${i} лет`;
          sClassText = `matrix-label-bold label-indent-${i}`;
          sClassCircle = "matrix-label-circle-medium";

          const largeCircle = document.createElementNS(svgns, "circle");
          largeCircle.setAttribute("cx", (props.point.x + dx - 2).toString());
          largeCircle.setAttribute("cy", (props.point.y + dy).toString());
          largeCircle.setAttribute("style", "r: var(--radius);");
          largeCircle.setAttribute("class", "matrix-label-circle-large");
          group.append(largeCircle);
        } else {
          text.textContent = `${i}-${i + 1}`;
        }

        text.setAttribute("dy", ".1em");

        text.setAttribute(
          "dx",
          (
            dx +
            (props.dTextX || 0) +
            (isCenteredText ? props.dCenterTextX || 0 : 0)
          ).toString()
        );
        text.setAttribute(
          "dy",
          (
            dy +
            (props.dTextY || 0) +
            (isCenteredText ? props.dCenterTextY || 0 : 0)
          ).toString()
        );
        text.setAttribute("x", props.point.x.toString());
        text.setAttribute("y", props.point.y.toString());
        text.setAttribute("class", sClassText);

        if (props.drawCircle) {
          const circle = document.createElementNS(svgns, "circle");
          circle.setAttribute("cx", (props.point.x + dx - 2).toString());
          circle.setAttribute("cy", (props.point.y + dy).toString());
          circle.setAttribute("style", "r: var(--radius);");
          circle.setAttribute("class", sClassCircle);
          group.append(circle);
        }

        group.append(text);
        $svgRef.append(group);
      }
    };

    const svgns = "http://www.w3.org/2000/svg";

    //Точка центер
    const Center = new Point(centerX, marginY + halfSide);

    //Точка центер вращения 2 квадрата
    const RotateCenter = new Point(
      Center.x,
      Center.y - Math.sqrt((side * side) / 2)
    );

    //Точка А (крайняя левая)
    const A = new Point(Center.x - radius, Center.y);

    //Точка B (левая верхняя под углом 45 градусов)
    const B = new Point(marginX - indent, marginY - indent);

    //Точка C (верхняя по центру)
    const C = new Point(Center.x, Center.y - radius);

    //Точка D (правая верхняя под углом 45 градусов)
    const D = new Point(marginX + side + indent, B.y);

    //Точка E (крайняя правая)
    const E = new Point(Center.x + radius, Center.y);

    //Точка F (правая нижняя под углом -45 градусов)
    const F = new Point(D.x, marginY + side + indent);

    //Точка H (левая нижняя под углом -45 градусов)
    const H = new Point(B.x, F.y);

    //Точка G (нижняя по центру)
    const G = new Point(Center.x, Center.y + radius);

    //Создадим горизонтальную линию
    drawLine([A, E]);

    //Создадим вертикальную линию
    drawLine([C, G]);

    //Создадим диагональ с верхнего левого угла до правого нижнего угла
    drawLine([B, F]);

    //Создадим диагональ с нижнего левого угла до правого верхнего угла
    drawLine([H, D]);

    //Создадим линию по контуру всех диагоналей
    drawLine([A, B, C, D, E, F, G, H]);

    const rectRef = document.createElementNS(svgns, "rect");
    rectRef.setAttribute("x", marginX.toString());
    rectRef.setAttribute("y", marginY.toString());
    rectRef.setAttribute("width", side.toString());
    rectRef.setAttribute("height", side.toString());
    rectRef.setAttribute("class", "matrix-line bold-line");
    $svgRef.append(rectRef);

    const rectRef45 = document.createElementNS(svgns, "rect");
    rectRef45.setAttribute("width", side.toString());
    rectRef45.setAttribute("height", side.toString());
    rectRef45.setAttribute("class", "matrix-line bold-line");
    rectRef45.setAttribute(
      "transform",
      `translate(${RotateCenter.x} ${RotateCenter.y}),rotate(45)`
    );
    $svgRef.append(rectRef45);

    const circle = document.createElementNS(svgns, "circle");

    circle.setAttribute("cx", centerX.toString());
    circle.setAttribute("cy", centerY.toString());
    circle.setAttribute("r", (side / 2 - 5.1).toString());
    circle.setAttribute("class", "matrix-line line");

    $svgRef.append(circle);
    //Центер
    drawCircle({
      point: Center,
      value: "9",
      color: "sandy",
      dx: 0,
      dy: 0,
    });
    //Внешний радиус
    drawCircle({
      point: A,
      color: "purple",
      value: "13",
      dx: 9,
      dy: 0,
    });
    drawCircle({
      point: A,
      value: "8",
      color: "blue",
      size: "medium",
      dx: indentCircleXS,
      dy: 0,
    });
    drawCircle({
      point: A,
      value: "22",
      color: "lightblue",
      size: "small",
      dx: indentCircleS,
      dy: 0,
    });

    drawCircle({
      point: A,
      value: "4",
      color: "green",
      size: "small",
      dx: indentCircleM,
      dy: 0,
    });
    //--------------------------------------//

    drawCircle({
      point: B,
      value: "16",
      dx: 6,
      dy: 7,
    });
    //--------------------------------------//
    drawCircle({
      point: C,
      value: "3",
      color: "purple",
      size: "large",
      dx: 0,
      dy: 9,
    });
    drawCircle({
      point: C,
      value: "15",
      color: "blue",
      size: "medium",
      dx: 0,
      dy: indentCircleXS,
    });
    drawCircle({
      point: C,
      value: "12",
      color: "lightblue",
      size: "small",
      dx: 0,
      dy: indentCircleS,
    });
    drawCircle({
      point: C,
      value: "21",
      color: "green",
      size: "small",
      dx: 0,
      dy: indentCircleM,
    });

    //--------------------------------------//
    drawCircle({
      point: D,
      value: "5",
      dx: -6,
      dy: 7,
    });

    //--------------------------------------//
    drawCircle({
      point: E,
      value: "2",
      color: "burgundy",
      dx: -9,
      dy: 0,
    });
    drawCircle({
      point: E,
      value: "13",
      color: "black",
      size: "medium",
      dx: -indentCircleXS,
      dy: 0,
    });
    drawCircle({
      point: E,
      value: "11",
      color: "orange",
      size: "small",
      dx: -indentCircleS,
      dy: 0,
    });

    //--------------------------------------//

    drawCircle({
      point: F,
      value: "20",
      dx: -6,
      dy: -7,
    });

    //--------------------------------------//
    drawCircle({
      point: G,
      value: "18",
      color: "burgundy",
      dx: 0,
      dy: -9,
    });
    drawCircle({
      point: G,
      value: "9",
      color: "black",
      size: "medium",
      dx: 0,
      dy: -indentCircleXS,
    });
    drawCircle({
      point: G,
      value: "9",
      color: "orange",
      size: "small",
      dx: 0,
      dy: -indentCircleS,
    });
    //--------------------------------------//

    drawCircle({
      point: H,
      value: "4",
      dx: 6,
      dy: -7,
    });

    //Внутренний радиус квадрата
    const rectA = new Point(marginX, marginY);
    const rectB = new Point(marginX + side, marginY);
    const rectC = new Point(marginX, marginY + side);
    const rectD = new Point(marginX + side, marginY + side);
    //--------------------------------------//
    drawCircle({
      point: rectA,
      value: "5",
      color: "black",
      size: "medium",
      dx: 8,
      dy: 8,
    });
    drawCircle({
      point: rectA,
      value: "7",
      color: "black",
      size: "small",
      dx: 15.5,
      dy: 15.5,
    });

    //--------------------------------------//

    drawCircle({
      point: rectB,
      value: "19",
      color: "black",
      size: "medium",
      dx: -8,
      dy: 8,
    });
    drawCircle({
      point: rectB,
      value: "14",
      color: "black",
      size: "small",
      dx: -15.5,
      dy: 15.5,
    });

    //--------------------------------------//
    drawCircle({
      point: rectC,
      value: "17",
      color: "black",
      size: "medium",
      dx: 8,
      dy: -8,
    });

    drawCircle({
      point: rectC,
      value: "13",
      color: "black",
      size: "small",
      dx: 15.5,
      dy: -15.5,
    });

    //--------------------------------------//
    drawCircle({
      point: rectD,
      value: "4",
      color: "black",
      size: "medium",
      dx: -8,
      dy: -8,
    });
    drawCircle({
      point: rectD,
      value: "11",
      color: "black",
      size: "small",
      dx: -15.5,
      dy: -15.5,
    });
    drawCircle({
      point: rectD,
      value: "20",
      color: "black",
      size: "small",
      dx: -30,
      dy: -30,
    });
    drawCircle({
      point: rectD,
      value: "4",
      color: "black",
      size: "small",
      dx: -18,
      dy: -34,
    });
    drawCircle({
      point: rectD,
      value: "11",
      color: "black",
      size: "small",
      dx: -34,
      dy: -18,
    });

    //--------------------------------------//

    drawLabel({
      drawCircle: true,
      point: A,
      value: "10",
      startX: 5,
      startY: -7,
      dx: 2.4,
      dy: 5.7,
    });
    drawLabel({
      drawCircle: false,
      point: A,
      value: "10",
      startX: -2,
      startY: -7,
      dx: 2.4,
      dy: 5.7,
    });

    drawLabel({
      drawCircle: true,
      point: B,
      value: "20",
      startX: 9,
      startY: -3,
      dx: 5.5,
      dy: 2.3,
      dTextY: 2.5,
      dCenterTextX: 1,
      dCenterTextY: 2,
    });
    drawLabel({
      drawCircle: false,
      point: B,
      value: "20",
      startX: 5.5,
      startY: -7,
      dx: 5.5,
      dy: 2.3,
    });

    drawLabel({
      drawCircle: true,
      point: C,
      value: "30",
      startX: 10,
      startY: 3.5,
      dx: 5.5,
      dy: -2.3,
      dTextX: -6,
      dTextY: 5,
      dCenterTextX: -5.5,
      dCenterTextY: 2,
    });
    drawLabel({
      drawCircle: false,
      point: C,
      value: "30",
      startX: 10,
      startY: 2,
      dx: 5.5,
      dy: -2.3,
    });

    drawLabel({
      drawCircle: true,
      point: D,
      value: "40",
      startX: 5.7,
      startY: 9,
      dx: 2.55,
      dy: -6,
      dTextX: -8,
      dTextY: 1,
      dCenterTextX: -6.8,
      dCenterTextY: 0,
    });
    drawLabel({
      drawCircle: false,
      point: D,
      value: "40",
      startX: 6,
      startY: 9.5,
      dx: 2.55,
      dy: -6,
    });

    drawLabel({
      drawCircle: true,
      point: E,
      value: "50",
      startX: -0.3,
      startY: 6,
      dx: -2.55,
      dy: -6,
      dTextX: -9,
      dTextY: 0.5,
      dCenterTextX: -6.2,
      dCenterTextY: 0.5,
    });
    drawLabel({
      drawCircle: false,
      point: E,
      value: "50",
      startX: 0,
      startY: 6.5,
      dx: -2.55,
      dy: -6,
    });

    drawLabel({
      drawCircle: true,
      point: F,
      value: "60",
      startX: -3,
      startY: 2.3,
      dx: -6,
      dy: -2.5,
      dTextX: -8,
      dTextY: -1.5,
      dCenterTextX: -6.5,
      dCenterTextY: -1,
    });
    drawLabel({
      drawCircle: false,
      point: F,
      value: "60",
      startX: -3,
      startY: 4,
      dx: -6,
      dy: -2.5,
    });

    drawLabel({
      drawCircle: true,
      point: G,
      value: "70",
      startX: -9,
      startY: -4.5,
      dx: -6,
      dy: 2.55,
      dCenterTextX: 1,
      dCenterTextY: -1,
    });
    drawLabel({
      drawCircle: false,
      point: G,
      value: "70",
      startX: -15,
      startY: -1,
      dx: -6,
      dy: 2.55,
    });

    drawLabel({
      drawCircle: true,
      point: H,
      value: "80",
      startX: -1.8,
      startY: -9,
      dx: -2.55,
      dy: 6,
    });
    drawLabel({
      drawCircle: false,
      point: H,
      value: "80",
      startX: -11,
      startY: -8,
      dx: -2.55,
      dy: 6,
    });

    drawCircleWithArrow({
      point: A,
      value: "A",
      label: "0 лет",
      leftSide: true,
      color: "purple",
      size: "mini",
      dx: -4,
      dy: 0,
    });

    drawCircleWithArrow({
      point: B,
      value: "E",
      label: "10 лет",
      leftSide: true,
      color: "white",
      textColor: "black",
      size: "mini",
      dx: -4,
      dy: 0,
    });
    drawCircleWithArrow({
      point: C,
      value: "Б",
      label: "20 лет",
      leftSide: false,
      color: "purple",
      size: "mini",
      dx: 0,
      dy: -3.5,
    });
  });
  return (
    <div className="container">
      <svg ref={svgRef} viewBox="0 0 450 450"></svg>
    </div>
  );
};

export default Matrix;
