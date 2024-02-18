export const getArrowSvg = ({
  id,
  startPoint,
  endPoint,
  dx,
  dy,
  orient,
  textProps,
}) => {
  const startCoordinates = `M${startPoint.x} ${startPoint.y}`,
    endCoordinates = `${endPoint.x + dx} ${endPoint.y + dy}`,
    svgns = "http://www.w3.org/2000/svg",
    svg = document.createElementNS(svgns, "svg"),
    defs = document.createElementNS(svgns, "defs");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("preserveAspectRatio", "none");

  const markerArrow = document.createElementNS(svgns, "marker"),
    markerArrowPolyline = document.createElementNS(svgns, "polyline");
  markerArrow.setAttribute("id", id);
  markerArrow.setAttribute("viewBox", "0 0 70 70");
  markerArrow.setAttribute("refX", "4");
  markerArrow.setAttribute("refY", "10");
  markerArrow.setAttribute("markerUnits", "userSpaceOnUse");
  markerArrow.setAttribute("orient", `${orient}`);
  markerArrow.setAttribute("markerWidth", "20");
  markerArrow.setAttribute("markerHeight", "20");
  markerArrowPolyline.setAttribute("points", "0,0 20,10 0,20 4,10");
  markerArrowPolyline.setAttribute("fill", "#eadeb6");
  markerArrowPolyline.setAttribute("stroke", "#eadeb6");
  markerArrow.append(markerArrowPolyline);

  defs.append(markerArrow);

  const line = document.createElementNS(svgns, "path"),
    animate = document.createElementNS(svgns, "animate"),
    text = document.createElementNS(svgns, "text"),
    g = document.createElementNS(svgns, "g");

  animate.setAttribute("attributeName", "d");
  animate.setAttribute("from", startCoordinates);
  animate.setAttribute("to", endCoordinates);
  animate.setAttribute("dur", "1s");
  animate.setAttribute("repeatCount", "1");

  line.setAttribute("d", `${startCoordinates},${endCoordinates}`);
  line.setAttribute(
    "style",
    `marker-end: url(#${id});  stroke: #eadeb6; stroke-width:1;`
  );

  line.append(animate);

  if (textProps) {
    text.textContent = `${textProps.label}`;
    text.setAttribute("class", "testing-text");
    g.setAttribute("transform", `translate(${textProps.x} ${textProps.y})`);
    text.setAttribute("transform", `rotate(${textProps.orient})`);
    g.append(text);
  }

  svg.append(defs, line);
  svg.append(g);
  return svg;
};
