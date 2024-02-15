import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { matrixSelector } from "../../redux/matrix/selectors";
import { YearsData } from "../../redux/matrix/types";
import { getSvg } from "../../utils/getSvg";
import { themeSelector } from "../../redux/theme/selectors";

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
  description?: string;
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

const Matrix: React.FC = () => {
  const { temp } = useSelector(themeSelector);
  const { colors } = temp;
  const { circles, yearsData } = useSelector(matrixSelector);
  const { heart, dollar } = getSvg();
  const marginX = 60;
  const marginY = 45;

  const indent = 10;
  const radius = 89;
  const side = 105;

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
      line.setAttribute("fill", "transparent");
      line.setAttribute("stroke", colors.colorLines);
      line.setAttribute("class", "line");
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
      text.setAttribute("title", props.description || "");

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
      const group3 = document.createElementNS(svgns, "g");
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

      text.textContent = props.value.toString();
      text.setAttribute(
        "class",
        `matrix-value-point ${sSizeClassText} ${sColorClassText}`
      );
      text.setAttribute("dy", ".1em");

      circle.setAttribute("style", "r: var(--radius);");
      circle.setAttribute("class", sClassCircle);

      polygon.setAttribute("class", sClassLine);
      line.setAttribute("x1", "-6");
      line.setAttribute("y1", "0");
      line.setAttribute("x2", "-2");
      line.setAttribute("y2", "0");
      line.setAttribute("class", sClassLine);

      text2.textContent = props.label;
      text2.setAttribute("class", "matrix-label-bold");
      text2.setAttribute("dx", props.label.length > 5 ? "-18" : "-16");
      text2.setAttribute("dy", "1.1");

      polygon.setAttribute("points", `-6 0 -4 1 -5 0 -4 -1 -6 0`);

      group.append(circle);
      group.append(text);

      group2.append(text2);

      group3.append(line);
      group3.append(polygon);
      group.append(group2);
      group.append(group3);

      if (!props.leftSide) {
        group3.setAttribute("transform", `rotate(180)`);
        text2.setAttribute("dx", "8");
      }

      group.setAttribute(
        "transform",
        `translate(${props.point.x + props.dx},${props.point.y + props.dy})`
      );

      $svgRef.append(group);
    };

    const drawLabel = (props: YearsData) => {
      let isCenteredText: boolean;

      const fnDrawLabel = (oParams: any) => {
        let { point, data, drawCircle, dx, dy, arrayMedian } = oParams;

        data.values.forEach((value: any, index: any) => {
          isCenteredText = index === arrayMedian;
          dx += data.dx;
          dy -= data.dy;

          const group = document.createElementNS(svgns, "g");
          const text = document.createElementNS(svgns, "text");
          let sClassText = "matrix-label";
          let sClassCircle = "matrix-label-circle";

          text.textContent = `${value}`;
          if (isCenteredText) {
            sClassText = `matrix-label-bold`;
            sClassCircle = "matrix-label-circle-medium";
            if (drawCircle) {
              const largeCircle = document.createElementNS(svgns, "circle");
              largeCircle.setAttribute("cx", (point.x + dx - 2).toString());
              largeCircle.setAttribute("cy", (point.y + dy).toString());
              largeCircle.setAttribute("style", "r: var(--radius);");
              largeCircle.setAttribute("class", "matrix-label-circle-large");
              group.append(largeCircle);
            }
          }

          text.setAttribute("dy", ".1em");

          text.setAttribute(
            "dx",
            (
              dx +
              (data.dTextX || 0) +
              (isCenteredText ? data.dCenterTextX || 0 : 0)
            ).toString()
          );
          text.setAttribute(
            "dy",
            (
              dy +
              (data.dTextY || 0) +
              (isCenteredText ? data.dCenterTextY || 0 : 0)
            ).toString()
          );
          text.setAttribute("x", point.x.toString());
          text.setAttribute("y", point.y.toString());
          text.setAttribute("class", sClassText);

          if (drawCircle) {
            const circle = document.createElementNS(svgns, "circle");
            circle.setAttribute("cx", (point.x + dx - 2).toString());
            circle.setAttribute("cy", (point.y + dy).toString());
            circle.setAttribute("style", "r: var(--radius);");
            circle.setAttribute("class", sClassCircle);
            group.append(circle);
          }

          group.append(text);
          $svgRef.append(group);
        });
      };

      yearsData.forEach((data) => {
        const arrayMedian = Math.floor(data.staticValues.values.length / 2);
        fnDrawLabel({
          point: data.point,
          data: data.staticValues,
          drawCircle: true,
          dx: data.staticValues.startX,
          dy: data.staticValues.startY,
          arrayMedian: arrayMedian,
        });
        if (data.dynamicValues) {
          fnDrawLabel({
            point: data.point,
            data: data.dynamicValues,
            dx: data.dynamicValues.startX,
            dy: data.dynamicValues.startY,
            arrayMedian: arrayMedian,
          });
        }
      });
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
    rectRef.setAttribute("fill", "transparent");
    rectRef.setAttribute("stroke", colors.colorLines);
    rectRef.setAttribute("class", "bold-line");
    $svgRef.append(rectRef);

    const rectRef45 = document.createElementNS(svgns, "rect");
    rectRef45.setAttribute("width", side.toString());
    rectRef45.setAttribute("height", side.toString());
    rectRef45.setAttribute("fill", "transparent");
    rectRef45.setAttribute("stroke", colors.colorLines);
    rectRef45.setAttribute("class", "bold-line");
    rectRef45.setAttribute(
      "transform",
      `translate(${RotateCenter.x} ${RotateCenter.y}),rotate(45)`
    );
    $svgRef.append(rectRef45);

    const circle = document.createElementNS(svgns, "circle");

    circle.setAttribute("cx", centerX.toString());
    circle.setAttribute("cy", centerY.toString());
    circle.setAttribute("r", (side / 2 - 5.1).toString());
    circle.setAttribute("fill", "transparent");
    circle.setAttribute("stroke", colors.colorLines);
    circle.setAttribute("class", "line");

    $svgRef.append(circle);
    circles.forEach((circle: any) => drawCircle(circle));
    //--------------------------------------//

    yearsData.forEach((data) => {
      drawLabel(data);
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
      color: "purple",
      size: "mini",
      dx: 0,
      dy: -4,
    });
    drawCircleWithArrow({
      point: D,
      value: "Ж",
      label: "30 лет",
      color: "white",
      textColor: "black",
      size: "mini",
      dx: 4,
      dy: 0,
    });
    drawCircleWithArrow({
      point: E,
      value: "В",
      label: "40 лет",
      color: "burgundy",
      size: "mini",
      dx: 4,
      dy: 0,
    });
    drawCircleWithArrow({
      point: F,
      value: "И",
      label: "50 лет",
      color: "white",
      textColor: "black",
      size: "mini",
      dx: 4,
      dy: 0,
    });
    drawCircleWithArrow({
      point: G,
      value: "Г",
      leftSide: true,
      label: "60 лет",
      color: "burgundy",
      size: "mini",
      dx: 0,
      dy: 4,
    });
    drawCircleWithArrow({
      point: H,
      value: "З",
      leftSide: true,
      label: "70 лет",
      color: "white",
      textColor: "black",
      size: "mini",
      dx: -4,
      dy: 0,
    });

    //Добавляем иконки из отдельного модуля
    if (heart) {
      heart.children[0]?.setAttribute("fill", "transparent");
      heart.children[0]?.setAttribute("stroke", colors.colorIconHeart);
      $svgRef.append(heart);
    }
    if (dollar) {
      dollar.children[0]?.setAttribute("stroke", colors.colorIconDollar);
      $svgRef.append(dollar);
    }
  });
  return <svg ref={svgRef} id="matrix" viewBox="0 0 225 225" />;
};

export default Matrix;
