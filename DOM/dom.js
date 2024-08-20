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

//---Static collection
const listStatic = document.querySelectorAll(".container_item");

//---Live collection
const listLive = document.getElementsByClassName("container_item");

console.log(listStatic);
console.log(listLive);

//---- closest
const elementt = document.querySelector(".container_link");
const parentList = elementt.closest(".container_item");

console.log(parentList);

//----- innerHTML
const textElement = document.querySelector(".title");

const textElementContent = textElement.innerHTML;
console.log(textElementContent);

textElement.innerHTML = `<p>${textElementContent}</p>
 <p><span style='color:yellow; text-shadow: 1px 1px 1px black' >hey</span> what's up</p>`;

//----- textContent
 const textElement2 = document.querySelector(".title");

const textElementContent2 = textElement.textContent;
console.log(textElementContent2);

textElement.textContent = "hey how's it going on";

// change comment

const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);

getComment.data =  "uppss it was сhanged";
console.log(getComment.data);
