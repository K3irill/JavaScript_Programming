"use strict";

//------------querySelectorAll by class

const elemOne =  document.querySelectorAll('.container_list')
console.log(elemOne);

//------------querySelectorAll by tag

const elemTwo =  document.querySelectorAll('li')
console.log(elemTwo);

//------------querySelectorAll by class and tag

const elemThree =  document.querySelectorAll('a.container_link')
console.log(elemThree);

//------------querySelectorAll by first level nesting 

const elemFour =  document.querySelectorAll('.container_list>li')
console.log(elemFour);

//------------querySelectorAll by 

const elemFive =  document.querySelectorAll('.container_item, .container_link')
console.log(elemFive);

//------------querySelectorAll by id

const elemSix =  document.querySelectorAll('#simpleLink')
console.log(elemSix);

//------------querySelectorAll by attribute

const elemSeven =  document.querySelectorAll('[disabled]')
console.log(elemSeven);

//------------querySelectorAll get specific element

const elems =  document.querySelectorAll('li')
console.log(elems[1]);

///--------------------queruSeceltor

const container_list = document.querySelector('.container_list')
console.log(container_list);

