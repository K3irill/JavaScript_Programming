"use strict";

const ARR_THINGS = ["laptop", "book", "lamp", "keyboard", "bottle of water"];
delete ARR_THINGS[1]; // на месте 'book' будет undefined
console.log(ARR_THINGS[0] + " and " + ARR_THINGS.at(-1)); //! ARR_THINGS.at(-1) is the same as [ARR_THINGS.length - 1])

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); // 5
//* array methods

const evenNumbers = []
for (let i = 0; i <= 1000; i += 2) {
  evenNumbers.push(i)
}
console.log(evenNumbers);

let arr = new Array();
arr.push("apple", "pear");
console.log(arr);

arr.unshift("strawberry");
console.log(arr);

arr.shift();
console.log(arr);
arr.pop();
console.log(arr);

let thing = ARR_THINGS[1];
console.log(typeof thing); //string

const strToArr = "laptop, book, lamp, keyboard, bottle of water, teaspoon";

let newArr = strToArr.split(", "); //make newArr from strToArr
console.log(newArr);

newArr.splice(3, 2, "wire", "adapter"); // delete 2 elements from arr[3]
console.log(newArr);

let pc = newArr.slice(1, 4); // create new arrays with elements from [1] to [4] index of newArr
console.log(pc);
let concatArr = ARR_THINGS.concat(arr, "grapes");
console.log(concatArr);

console.log(concatArr.indexOf("lamp"));
console.log(concatArr.includes("lamp"));

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name);

let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length); // 2

let lengths = ARR_THINGS.map(item => item.length);
console.log(lengths);

evenNumbers.reverse()
console.log(evenNumbers);

let arra = [1, 2, 3, 4, 5];

let result = arra.reduce((sum, current) => sum + current, 0);

console.log(result);

console.log(Array.isArray(ARR_THINGS))
//* Iterate over a array

for (let i = 0; i < ARR_THINGS.length; i++) {
  console.log(`simple for cycle: ${ARR_THINGS[i]}`);
}

for (let el of ARR_THINGS) {
  console.log(`for of: ${el}`);
}

ARR_THINGS.forEach((el) => {
  console.log(`forEach: ${el}`);
});
