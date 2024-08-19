"use strict";

function whatsThis() {
  console.log(this === undefined);
}

whatsThis();
// true

const userInfo = {
  name: "Alex",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

userInfo.greet();
// Hello, my name is Alex

function User() {
  this.name = "Alex";
}

const firstUser = new User();
firstUser.name === "Alex";
// true

//!      call and apply

const user1 = { name: "Alex" };
const user2 = { name: "Ivan" };

function greeting(greetWord, emotion) {
  return `${greetWord} ${this.name} ${emotion}`;
}
console.log(greeting.call(user1, "Hello,", ":-)"));
console.log(greeting.apply(user1, ["Good morning,", ":-D"]));

function greetWaitAndAgain() {
  console.log(`Hello, ${this.name}!`);
  setTimeout(() => {
    console.log(`Hello again, ${this.name}!`);
  });
}

const user = { name: "Alex" };

user.greetWaitAndAgain = greetWaitAndAgain;
user.greetWaitAndAgain();

// Hello, Alex!
// Hello again, Alex!
