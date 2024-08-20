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

getComment.data =  "uppss it was сhanged";
console.log(getComment.data);

//* Create Element
const listElement = document.querySelector('.lesson__list')

const newElement = document.createElement('p');

newElement.innerHTML= 'Hello everyone! -> before'
console.log(newElement);

//* Create Text Node
const newText = document.createTextNode('Hi! -> after')
console.log(newText);

//* paste created element 

listElement.before(newElement)

listElement.after(newText, '. coooool')

// listElement.prepend(newElement)

// listElement.append(newElement)

//*paste html element
const listElement2  = document.querySelector('.lesson__list2')

listElement2.insertAdjacentHTML(
  'afterbegin',
  '<li>react</li>'
)
//beforeend
//beforebegin
//afterend
//afterbegin

const inputEl = document.querySelector('[disabled]');

listElement2.after(inputEl)

const cloneInputEl = inputEl.cloneNode(true);

listElement2.after(cloneInputEl)

//* remove element

cloneInputEl.remove();

//* ------  className and ClassList

const holaLink = document.querySelector('.hola__link');
console.log(holaLink);

const holaLinkClassName = holaLink.className;
console.log(holaLinkClassName);

holaLink.className = 'red';

holaLink.classList.add('active')
console.log(holaLink);

// holaLink.classList.remove('active')

// holaLink.classList.add('toggle')

// holaLink.classList.contains('contains')

if(holaLink.classList.contains('active')){
  console.log(`holaLink has class 'active'`);
  
}
for (let className of holaLink.classList){
  console.log('class name: ' + className );
  
}