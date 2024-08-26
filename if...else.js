"use strict";
const condition = 2;
//*Выполнить один, либо другой блок кода, в зависимости от условия:

if (condition) {
    console.log("Выполнится, если условие истинное (true)");
} else {
    console.log("Выполнится, если условие ложное (false)");
}

//*Выполнить блок кода, если условие истинное, либо пропустить его:

if (condition) {
    console.log("Выполнится, если условие истинное");
}

//*Выполнить блок кода, у которого условие истинное и находится выше всего в списке, остальные проверки проигнорировать:

if (condition > 2) {
    // ...
} else if (condition !== 2) {
    // ...
} else if (condition % 2 === 0) {
    // ...
} else {
    // Выполнится, если все условия выше ложные
}

/*
!8 значений, которые приводятся к false:
--->  false;
--->  0;
--->  -0;
--->  '';
--->  null;
--->  undefined;
--->  NaN;
--->  0n (тип BigInt).
 */

//* Тернарынй оператор

let day = "Вторник";
let externalValue;
const processTuesday = () => console.log("Ура сегодня вторник");

let value = day === "Вторник" ? 50 : 1; // Во вторник значение 50, в другие дни 1
console.log(value);

day === "Вторник" && processTuesday();

const value2 = externalValue ?? 42; // ?? - это оператор нулевого слияния
console.log(value2);

//! без использования ??
const value3 =
    externalValue !== null && externalValue !== undefined ? externalValue : 42;

console.log(value3);
