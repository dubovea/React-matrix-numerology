export const getSvg = (svg: string) => {
  const svgns = "http://www.w3.org/2000/svg",
    g = document.createElementNS(svgns, "g");

  switch (svg) {
    case "heart":
      const line = document.createElementNS(svgns, "path");
      line.setAttribute(
        "d",
        "M2.7-5C.5-5 .1-2.9.1-2.9S-.4-5-2.5-5C-4.9-5-5.6-2.9-5.4-1.7-5.2.5.1 4.8.1 4.8S5.4.5 5.6-1.7C5.8-2.9 5.1-5 2.7-5"
      );
      line.setAttribute("class", "matrix-line line");
      g.setAttribute("transform", "translate(120, 120)");
      g.append(line);
      break;
    case "dollar":
      const text = document.createElementNS(svgns, "text");
      text.textContent = "$";
      text.setAttribute("class", "dollar");
      text.setAttribute("transform", "translate(136, 112)");
      g.append(text);
      break;
    default:
      break;
  }
  return g;
};
