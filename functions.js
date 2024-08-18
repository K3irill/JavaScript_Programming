"use stirct";

//* Переменные внутри функции существуют только внутри этой функции — этот эффект называется областью видимости.

//! 1. Function Declaration
const NUM_ARR = [20, 25, 90, 567, 451, 264];

function getEvenNum(arr) {
  let evenArr = [];
  return (evenArr = arr.filter((el) => el % 2 === 0));
}
console.log(getEvenNum(NUM_ARR));

//! 2. Function Expression
const someStr = "lorem is enit govetus to epam!";

const getLastWord = (str) => {
  let arr = str.split(" ");
  let string = arr[arr.length - 1];
  if (string.includes("!") || string.includes(".")) {
    string = string.slice(0, string.length - 1);
  }
  return string;
};

console.log(getLastWord(someStr));

//! Основное отличие в том, что если мы использовали Function Declaration, то JavaScript перенесёт функции вверх текущей области видимости. Это называется «поднятие» (или hoisting).
//! На практике это означает, что мы можем использовать её до своего же объявления.

//! 3. Arrow Function

const arrowFun = (x, y) => x ** y;

console.log(arrowFun(4, 2));

//! Чтобы вернуть объект, его необходимо обернуть в скобки. Только так JavaScript поймёт, что мы не открываем тело функции, а возвращаем результат:
const arrowFunc2 = () => ({ cat: "Барс" });
console.log(arrowFunc2());

//! Recursive Functions - Внутри функции можно вызывать её саму.

function fac(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}

console.log(fac(3));

//! Замыкание.

function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

//! IIFE — моментальный вызов функционального выражения
const func = (function () {
  // ...
})();

//! Callback (функция обратного вызова) — функция, которая выполняется в конце операции, когда все остальные операции уже завершены.
function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();
