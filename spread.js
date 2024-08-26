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
