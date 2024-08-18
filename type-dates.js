"use strict";
//! Примитивные типы данных
const number = 12,
  numberToo = 0.12;
const string = "it's string",
  stringToo = "12",
  andThis = `true`;
const boolean = true,
  booleanToo = 1 > 2;
let isUndefined = undefined,
  isUndefindToo; //*означает, что «значение не было присвоено».
let isNull = null; //*представляет собой «ничего», «пусто» или «значение неизвестно».
let notAnumber = NaN;
const isSymbol = Symbol("name"); //!Символ (Symbol) — примитивный тип, значения которого создаются с помощью вызова функции Symbol. Каждый созданный символ уникален
const bigInt = 1234567890123456789012345678901234567890n;

//! Сложный тип данных Object
const array = ["feb", "april", "sept"];
console.log(typeof array);

const arrObj = [
  { name: "Vitya", age: 19 },
  { name: "Proshka", age: 13 },
  { name: "Oleg", age: 33 },
];
console.log(typeof arrObj);

const obj = {
  city: "S.P",
  street: "2d avenu",
  apartament: 202,
  isFun: (x) => console.log(),
};
console.log(typeof obj);

/*
*Все остальные типы называются «примитивными», потому что их значениями
могут быть только простые значения (будь то строка, или число, или что-то ещё).
* В объектах же хранят коллекции данных или более сложные структуры.
 */
