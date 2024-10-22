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
//---------------------|
const a = {
        prop: 1,
        f: function (a, b) {
            var that = this;
            function func() {
                console.log(that.prop + a + b);
            }
            func();
        },
    },
    b = {
        prop: 2,
        f: function (a, b) {
            console.log(this.prop + a + b);
        },
    };
//
a.f.apply(b, [1, 1]);
b.f.call(a, 2, 2);
//
const newFuncA = a.f.bind(b, 1, 1);
newFuncA();
const newFuncB = b.f.bind(a, 2, 2);
newFuncB();

//

setTimeout(a.f.bind(a, 1, 1), 1000);
