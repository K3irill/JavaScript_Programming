"use scrict";

const currentDate = new Date("August 19, 2024 14:00:30");

console.log(currentDate.getDay());

console.log(currentDate.getHours());

console.log(currentDate.getTime());

console.log(currentDate.getFullYear());

console.log(currentDate.toISOString());

currentDate.setMonth(0, 1);

console.log(currentDate.toLocaleDateString());

const utcDate = new Date(Date.UTC(2024, 8, 19, 14, 0, 30));

console.log(utcDate.toISOString());

const nowDate = Date.now();
console.log(nowDate);

const utcDateOne = new Date(Date.UTC(2022, 0, 1, 0, 0, 0));
const utcDateTwo = new Date(Date.UTC(2022, 11, 31, 0, 0, 0));

console.log(utcDateOne.toUTCString());

console.log(utcDateTwo.toUTCString());

const result = utcDateTwo - utcDateOne;
console.log(result);

console.log(result / (1000 * 60 * 60 * 24));
// 364
