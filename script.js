"use strict";

function reverseAndNegate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * -1);
  }

  return result.reverse();
}
console.log(reverseAndNegate([1, -2, 5, 4]));

// function calculate(arr) {
//   let ab = [];
//   let newArr = [];
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       ab.push(arr[i] + 4);
//     } else ab.push(arr[i] - 2);
//   }
//   ab.map((el) => {
//     if (el % 13 !== 0) {
//       newArr.push(el);
//     }
//   });
//   newArr.map((el) => {
//     result += el;
//   });
//   return result;
// }
function calculate(arr) {
    let newArr = arr.map(el => el % 2 == 0 ? el + 4 : el - 2).filter(el => el % 13 !== 0).reduce((a, b) => a + b)
    return newArr
}
console.log(calculate([15, 2, 3, 5, 6]));

function transfromUpvotes(arr) {
  let result = [];

  arr.map((el) => {
    if (!el.includes("k")) {
      result.push(parseFloat(el));
    } else result.push(parseFloat(el) * 1000);
  });
  return result;
}
console.log(transfromUpvotes(["10k", "2.3k", "5k", "32", "28.4k"]));
