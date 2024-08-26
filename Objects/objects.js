"use strict";

let obj1 = new Object();
obj1.name = "Kail";
obj1.age = 20;
console.log(obj1);

let obj2 = {
    title: "something",
    num: 900,
    trash: "traaaaash",
    "a lot of times": 20,
};
console.log(obj2.title);
console.log(obj2);

delete obj2.trash;
console.log(obj2);

console.log(obj2["a lot of times"]);

let user = {
    name: "John",
    age: 30,
};

let key = "age"; //prompt("Что вы хотите узнать о пользователе?", "name");

console.log(user[key]);
//----
let fruit = "apple"; //prompt("Какой фрукт купить?", "apple");

let bag = {
    [fruit]: 5,
};

console.log(bag[fruit]);

const newObj = {
    info: "something",
    error: "error!",
    warning: "warning!",
};

console.log("error" in newObj);

for (let i in newObj) {
    console.log(`for in: ${i}`);
}
