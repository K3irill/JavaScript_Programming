"use strict";

class Task {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        (this.title = title),
            (this._isCompleted = isCompleted),
            (Task.counter += 1);
    }

    static getDefaultTitle() {
        return "Title text";
    }

    completed() {
        this._isCompleted = true;
    }

    get isCompleted() {
        return this._isCompleted === true
            ? "task is completed"
            : "task is not completed";
    }
}

Task.counter = 0;

let task = new Task("ES6", false);
// let task2 = new Task('learn ReactJS', true)
// let task3 = new Task()

// task.completed()

console.log(task.isCompleted, task._isCompleted);

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(boolean) {
        return (this._isCheckedOut = boolean);
    }
    toggleCheckOutStatus() {
        return this._isCheckedOut !== true
            ? (this._isCheckedOut = true)
            : (this._isCheckedOut = false);
    }
    get getAverageRating() {
        return (
            this._ratings.reduce(
                (currentSum, rating) => currentSum + rating,
                0
            ) / this._ratings.length
        ).toFixed(1);
    }
    addRating(...el) {
        this._ratings.push(...el);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title) {
        super(title);
        this._author = artist;
        this.songs = [];
    }
}
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.getAverageRating);

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1, 1, 5);
console.log(speed.getAverageRating);

class Creature {
    constructor(name) {
        this.name = name;
    }
    born() {
        console.log(`${this.name} родился`);
    }
}

class Animal extends Creature {
    constructor(name, maxAge) {
        super(name);
        this.maxAge = maxAge;
    }
}

class Human extends Animal {
    constructor(name, maxAge, height) {
        super(name, maxAge);
        this.height = height;
        this.inventions = [];
    }
}

class Bird extends Animal {
    speed(kph) {
        console.log(`${this.name} летит со скоростью ${kph}`);
    }
}

class Fish extends Animal {
    swim(distance) {
        console.log(`Рыба ${this.name} проплывает ${distance} метров!`);
    }
}

class Chinese extends Human {
    talk() {
        console.log(`Я, ${this.name}, я люблю кушать рис!`);
    }
}

const ying = new Chinese("Ying", 72, 167);
ying.born();
ying.talk();
