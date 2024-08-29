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

//
let name = "Jack";
let surname = "Jamberson";
let sex = "male";
let age = 20;

//ES5
var person = {
    name: name,
    sex: sex,
    age: age,
    greet: function () {
        console.log(`Hello ${this.name}`);
    },
};

Object.defineProperty(person, "password", {
    get: function () {
        return this.name + this.age;
    },
});
console.log(person);

//ES6
var person2 = {
    name,
    surname,
    sex,
    age,
    greet() {
        console.log(`Hello ${this.name}`);
    },
    get password() {
        return this.name + this.age;
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    // set fullName(value) {
    //     [this.name, this.surname] = value.split(" ");
    // },

    set fullName(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое, должно быть более 4 символов");
            return;
        }
        this._name = value;
    },
};

// person2.fullName = "Alice Cooper";
console.log(person2.fullName);

//

person.name;
person["name"];

let firstName = "name";
person[firstName];

// person = {
//     [firstName]: "Max",
// };

console.log(person);

//spaceship

let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032,
    },
    crew: {
        captain: {
            name: "Sandra",
            degree: "Computer Engineering",
            encourageTeam() {
                console.log("We got this!");
            },
            "favorite foods": ["cookies", "cakes", "candy", "spinach"],
        },
    },
    engine: {
        model: "Nimbus2000",
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD",
        },
        "back-up": {
            battery: "Lithium",
            terabytes: 50,
        },
    },
};
let capFave = spaceship.crew.captain["favorite foods"][0];
spaceship.passengers = [
    { name: "Kail", age: 20 },
    { name: "Kira", age: 19 },
];
let firstPassenger = spaceship.passengers[0];
