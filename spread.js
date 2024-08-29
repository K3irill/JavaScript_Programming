"use strict";

function multiplyThreeNum(a, b, c) {
    return a * b * c;
}
const arrNums = [6, 5, 2];

console.log(multiplyThreeNum(...arrNums)); //console.log(multiplyThreeNumbers(nums[0], nums[1], nums[2]))

const firstArr = ["lorem", "first", "secnod", "end"];
const secondArr = [...firstArr, "good job", null];

console.log(secondArr);

const person = {
    name: "Mike",
    age: 20,
};

const user = {
    ...person,
    languages: ["English", "Spanish", "German"],
    country: "USA",
};

console.log(user);

//ES5
const num1 = [1, 2, 3, 4];
const num2 = [2, 3, 4, 5];
Array.prototype.push.apply(num1, num2);
console.log(num1);
//ES6
const num3 = [1, 2, 3, 4];
const num4 = [2, 3, 4, 5];
let res = [...num3, ...num4];
console.log(res);
//

const A = {
    a: "default",
    b: "just_test",
};
const B = {
    a: "value_fron_b",
};
//ES5
let C = Object.assign(A, B)
console.log(C);
//ES6
let D = {
    ...A,
    ...B
}
console.log(D);
//

const arr = [1,2,3]
function sum(a,b,c) {
    return a+b+c
}
//ES5

sum(arr[0], arr[1], arr[2])
//or
sum.apply(null, arr)

//ES6
console.log(sum(...arr))

//REST

function res1(arg, ...REST) {
    console.log(arg, REST);
    
}
res1(1,2,3,4,5,6,7,8,9)