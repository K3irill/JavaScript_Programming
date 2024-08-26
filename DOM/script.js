"use strict";

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("dsdgsagas " + random(5, 100));

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
// const paragraphs = document.querySelectorAll("#skill-p");

// setInterval(() => {
//   paragraphs.forEach((el) => {
//     el.style.color = COLOR_ARR[random(0, COLOR_ARR.length - 1)];
//   });
// }, 1000);

// const html =
//   "<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>";
// const removeDivs = (htmlString) => {
//   const tempElement = document.createElement("div");
//   tempElement.innerHTML = htmlString;
//   const divs = tempElement.querySelectorAll('div')
//   divs.forEach(div => div.remove())
//   return tempElement.innerHTML;
// };
// console.log(removeDivs(html));

function multiply(a, b) {
    if (b <= 0) {
        return 0;
    }
    return a + multiply(a, b - 1);
}
console.log(multiply(2, 3));

function pow(a, b) {
    if (b === 0) {
        return 1;
    }
    if (b > 0) {
        return a * pow(a, b - 1);
    }
}

console.log(pow(5, 5));
console.log(5 ** 5);

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

//--------------------------
const arrGoodsNames = [
    "shirt",
    "jacket",
    "cap",
    "trousers",
    "gloves",
    "hoodie",
    "socks",
    "watch",
];
const goods = [{ price: "name" }, { price: "name" }, { price: "name" }];

function serverMock(arr) {
    let result = [];
    arr.map((el) => {
        el.price = random(300, 10000);
        el.name = arrGoodsNames[random(0, 3)];
        result.push(el);
    });
    return result;
}

console.log(serverMock(goods));
