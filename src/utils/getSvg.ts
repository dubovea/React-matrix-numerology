export const getSvg = () => {
  const svgns = "http://www.w3.org/2000/svg",
    heartIcon = document.createElementNS(svgns, "g"),
    dollarIcon = document.createElementNS(svgns, "g");

  const line = document.createElementNS(svgns, "path");
  line.setAttribute(
    "d",
    "M2.16-4C.4-4 .08-2.32.08-2.32S-.32-4-2-4C-3.92-4-4.48-2.32-4.32-1.36-4.16.4.08 3.84.08 3.84S4.32.4 4.48-1.36C4.64-2.32 4.08-4 2.16-4"
  );
  heartIcon.setAttribute("class", "line");
  heartIcon.setAttribute("transform", "translate(121, 126)");
  heartIcon.append(line);

  const text = document.createElementNS(svgns, "text");
  text.textContent = "$";
  dollarIcon.setAttribute("class", "dollar");
  text.setAttribute("transform", "translate(136, 110)");
  dollarIcon.append(text);

  return {
    heart: heartIcon,
    dollar: dollarIcon,
  };
};
