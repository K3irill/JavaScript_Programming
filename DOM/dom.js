"use strict";

const htmlElement = document.documentElement;
const bodyElement = document.body;
const headElement = document.head;

console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

//---

const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;

console.log(firstChild);
console.log(lastChild);

//---

const childNodes = bodyElement.childNodes;
console.log(childNodes);

console.log(bodyElement.hasChildNodes);



for (let node of childNodes) {
  console.log(node);
}


const children = bodyElement.children;

console.log(children);
