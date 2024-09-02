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
    let newArr = arr
        .map((el) => (el % 2 == 0 ? el + 4 : el - 2))
        .filter((el) => el % 13 !== 0)
        .reduce((a, b) => a + b);
    return newArr;
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
const obj = [
    {
        name: "Petia",
        age: 18,
    },
    {
        name: "Pasha",
        age: 22,
    },
    {
        name: "Alex",
        age: 15,
    },
];

function getInfo(persons) {
    let averageAge = 0;
    persons.map((el) => (averageAge += el.age / persons.length));
    let newArr = persons.reduce((max, obj) => (obj.age > max.age ? obj : max));
    let oldestHuman = newArr.name;
    let newObj = new Object();
    newObj.oldestHuman = oldestHuman;
    newObj.averageAge = Math.floor(averageAge);
    return newObj;
}
console.log(getInfo(obj));

const SOMEARR = [
    ["key1", "value1"],
    ["key2", "value2"],
];

function objFromArr(arr) {
    const obj = {};
    arr.forEach((el) => {
        obj[el[0]] = el[1];
    });
    return obj;
}

console.log(objFromArr(SOMEARR));
let someStr = "communication";

function countChars(str) {
    let countObj = {};
    str.split("").forEach((el) => {
        const lowerEl = el.toLowerCase();
        if (countObj[lowerEl] === undefined) {
            countObj[lowerEl] = 1;
        } else ++countObj[lowerEl];
    });
    return countObj;
}
console.log(countChars(someStr));

let num = 1;
const sayHello = (name) => {
    let num = 0;

    return function () {
        num++;
        if (num < 4) {
            return console.log(`Hello, ${name}`);
        }
    };
};
const el = sayHello("Andrew");
el();
el();
el();
el();
el();
el();

for (var i = 0; i <= 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 0);
    })(i);
}

//palindrom

function palindrom(word) {
    word = word.toLowerCase();
    return word === word.split("").reverse().join("");
}
console.log(palindrom("aazZaa"));

const arr = [{ a: 1, b: 2 }, { a: "value" }, { o: null }, { a: true, m: 123 }];

function pick(arr, key) {
    return arr.map((el) => el[key]);
}
console.log(pick(arr, "a"));

function createCounter(number) {
    let result = number;
    return function counter() {
        result += 1;
        return result;
    };
}
const countFrom5 = createCounter(5);
console.log(countFrom5());
console.log(countFrom5());
console.log(countFrom5());
console.log(countFrom5());

function createMultiplier(func, num) {
    return function (...args) {
        return func(...args) * num;
    };
}

function sum(x, y) {
    return x + y;
}

console.log(createMultiplier(sum(2, 3), 5));
