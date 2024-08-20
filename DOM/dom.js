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

//*---Static collection
const listStatic = document.querySelectorAll(".container_item");

//*---Live collection
const listLive = document.getElementsByClassName("container_item");

console.log(listStatic);
console.log(listLive);

//*---- closest
const elementt = document.querySelector(".container_link");
const parentList = elementt.closest(".container_item");

console.log(parentList);

//*----- innerHTML
const textElement = document.querySelector(".title");

const textElementContent = textElement.innerHTML;
console.log(textElementContent);

textElement.innerHTML = `<p>${textElementContent}</p>
 <p><span style='color:yellow; text-shadow: 1px 1px 1px black' >hey</span> what's up</p>`;

//*----- textContent
const textElement2 = document.querySelector(".title");

const textElementContent2 = textElement.textContent;
console.log(textElementContent2);

textElement.textContent = "hey how's it going on";

//* change comment

const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);

getComment.data = "uppss it was сhanged";
console.log(getComment.data);

//* Create Element
const listElement = document.querySelector(".lesson__list");

const newElement = document.createElement("p");

newElement.innerHTML = "Hello everyone! -> before";
console.log(newElement);

//* Create Text Node
const newText = document.createTextNode("Hi! -> after");
console.log(newText);

//* paste created element

listElement.before(newElement);

listElement.after(newText, ". coooool");

// listElement.prepend(newElement)

// listElement.append(newElement)

//*paste html element
const listElement2 = document.querySelector(".lesson__list2");

listElement2.insertAdjacentHTML("afterbegin", "<li>react</li>");
//beforeend
//beforebegin
//afterend
//afterbegin

const inputEl = document.querySelector("[disabled]");

listElement2.after(inputEl);

const cloneInputEl = inputEl.cloneNode(true);

listElement2.after(cloneInputEl);

//* remove element

cloneInputEl.remove();

//* ------  className and ClassList

const holaLink = document.querySelector(".hola__link");
console.log(holaLink);

const holaLinkClassName = holaLink.className;
console.log(holaLinkClassName);

holaLink.className = "red";

holaLink.classList.add("active");
console.log(holaLink);

// holaLink.classList.remove('active')

// holaLink.classList.add('toggle')

// holaLink.classList.contains('contains')

if (holaLink.classList.contains("active")) {
  console.log(`holaLink has class 'active'`);
}
for (let className of holaLink.classList) {
  console.log("class name: " + className);
}

//* add style
holaLink.style.color = "brown";
holaLink.style["font-size"] = "36px";
// or with camelCase
holaLink.style.fontSize = "24px";
//a few styles
holaLink.style.cssText = `

  text-decoration: none;
  margin-left: 20px;
  color: purple;
  font-weight: bold;
  text-transform: uppercase;

`;

const holaLinkStyle = getComputedStyle(holaLink);
console.log(holaLinkStyle.textTransform);

console.log(holaLink.href);

console.dir(holaLink);

console.log(holaLink.hasAttribute("disabled"));

const hrefHolaLink = holaLink.getAttribute("href");
console.log(hrefHolaLink);

holaLink.setAttribute("title", "linkkkk");
holaLink.removeAttribute("title");

console.log(holaLink.tagName);
holaLink.hidden = true;
holaLink.hidden = false;

// client width and height

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

let scrollWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
);

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

console.log(scrollWidth);
console.log(scrollHeight);

//* scrollIntoView
const linkToImportantElement = document.querySelector("#simpleLink");


function setScrollIntoView() {
  const reachingElement = document.querySelector(".imoprtant");
  return reachingElement.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}


linkToImportantElement.addEventListener("click", () => setScrollIntoView());

//TODO: scroll lock

const scrollLockBtn = document.querySelector('#btnScroll')


function setEnableDisableScroll() {
  document.body.classList.toggle('scroll-lock')
  
  if(scrollLockBtn.textContent !== 'Disable'){
    scrollLockBtn.textContent = 'Disable'
    alert(`Scroll is ${scrollLockBtn.textContent}`)
  }else {scrollLockBtn.textContent = 'Enable'; alert(`Scroll is ${scrollLockBtn.textContent}`)}
}

scrollLockBtn.addEventListener('click', () => setEnableDisableScroll())