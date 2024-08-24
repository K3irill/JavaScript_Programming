"use strict";

function random(min, max) {
  return Math.floor(Math.random(min, max) * 10);
}
console.log("dsdgsagas " + random(5, 10));

const COLOR_ARR = [
  "red",
  "aqua",
  "yellow",
  "green",
  "blue",
  "orange",
  "pink",
  "brown",
];
const paragraphs = document.querySelectorAll("#skill-p");

setInterval(() => {
  paragraphs.forEach((el) => {
    el.style.color = COLOR_ARR[random(0, COLOR_ARR.length - 1)];
  });
}, 1000);

const html =
  "<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>";
const removeDivs = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const divs = tempElement.querySelectorAll('div')
  divs.forEach(div => div.remove())
  return tempElement.innerHTML;
};
console.log(removeDivs(html));

