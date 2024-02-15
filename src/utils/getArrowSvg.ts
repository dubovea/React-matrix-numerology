export const getArrowSvg = () => {
  const svgns = "http://www.w3.org/2000/svg",
    svg = document.createElementNS(svgns, "svg"),
    defs = document.createElementNS(svgns, "defs");
  svg.setAttribute("id", "svgArrow");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("preserveAspectRatio", "none");

  const markerArrow = document.createElementNS(svgns, "marker"),
    markerArrowPolyline = document.createElementNS(svgns, "polyline");
  markerArrow.setAttribute("id", "MarkerArrow");
  markerArrow.setAttribute("viewBox", "0 0 70 70");
  markerArrow.setAttribute("refX", "0");
  markerArrow.setAttribute("refY", "10");
  markerArrow.setAttribute("markerUnits", "userSpaceOnUse");
  markerArrow.setAttribute("orient", "-45");
  markerArrow.setAttribute("markerWidth", "20");
  markerArrow.setAttribute("markerHeight", "20");
  markerArrowPolyline.setAttribute("id", "markerPoly1");
  markerArrowPolyline.setAttribute("points", "0,0 20,10 0,20 4,10");
  markerArrowPolyline.setAttribute("fill", "red");
  markerArrowPolyline.setAttribute("stroke", "red");
  markerArrow.append(markerArrowPolyline);
  const markerCircle = document.createElementNS(svgns, "marker"),
    circle = document.createElementNS(svgns, "circle");
  markerCircle.setAttribute("id", "MarkerCircle");
  markerCircle.setAttribute("viewBox", "0 0 10 10");
  markerCircle.setAttribute("refX", "0");
  markerCircle.setAttribute("refY", "5");
  markerCircle.setAttribute("markerUnits", "userSpaceOnUse");
  markerCircle.setAttribute("markerWidth", "10");
  markerCircle.setAttribute("markerHeight", "10");
  circle.setAttribute("cx", "5");
  circle.setAttribute("cy", "5");
  circle.setAttribute("r", "5");
  circle.setAttribute("fill", "red");
  circle.setAttribute("stroke", "red");
  markerCircle.append(circle);

  defs.append(markerArrow);

  const line = document.createElementNS(svgns, "line");
  line.setAttribute("id", "path10");
  line.setAttribute("x1", "100");
  line.setAttribute("y1", "98");
  line.setAttribute("x2", "150");
  line.setAttribute("y2", "50");
  line.setAttribute(
    "style",
    "marker-end: url(#MarkerArrow);  stroke:green; stroke-width:1; "
  );
  svg.append(defs, line);
  return svg;
};
