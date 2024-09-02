// const people = ['Jack', 'Max', 'Leo']

//ES5
// let jack = people[0];
// let max = people[1];
// let leo = people[2];

//ES6

// let [jack, max, leo] = people

let [jack, max, leo] = ["Jack", "Max", "Leo"];

const rate = [1, 50, 100, [1000, 2000]];
let [low, middle, high, [higher, sup]] = rate;
console.log(low, middle, high, higher, sup);

function caclculate([a, b]) {
    return [a, b];
}
let [a, b] = caclculate([1, 10]);

console.log(a, b);

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];
console.log(guest, admin);

//Cycle .entries()

let user = {
    name: "John",
    age: 30,
};

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, age:30
}

// Residual parameters "..."
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(rest);
