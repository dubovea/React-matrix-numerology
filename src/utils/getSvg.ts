export const getSvg = () => {
  const svgns = "http://www.w3.org/2000/svg",
    heartIcon = document.createElementNS(svgns, "g"),
    dollarIcon = document.createElementNS(svgns, "g");

  const line = document.createElementNS(svgns, "path");
  line.setAttribute(
    "d",
    "M2.7-5C.5-5 .1-2.9.1-2.9S-.4-5-2.5-5C-4.9-5-5.6-2.9-5.4-1.7-5.2.5.1 4.8.1 4.8S5.4.5 5.6-1.7C5.8-2.9 5.1-5 2.7-5"
  );
  heartIcon.setAttribute("class", "line");
  heartIcon.setAttribute("transform", "translate(120, 120)");
  heartIcon.append(line);

  const text = document.createElementNS(svgns, "text");
  text.textContent = "$";
  dollarIcon.setAttribute("class", "dollar");
  text.setAttribute("transform", "translate(136, 112)");
  dollarIcon.append(text);

  return {
    heart: heartIcon,
    dollar: dollarIcon,
  };
};
