let person = {
    name: "Jack",
    age: 20,
    address: {
        city: "Minsk",
    },
};

// let { name = 'Max', age = 18 } = person;
// console.log(name, age);

//rename variables
let { name: personName, age: personAge } = person;
console.log(personName, personAge);

let {
    address: { city = "Brest" },
} = person;
console.log(city);

function getDate({ name, age }) {
    return { name, age };
}
let result = getDate(person);
console.log(result);

let { name: nameFun = "user", age: ageFun } = getDate(person);
console.log(nameFun, ageFun);

//
let options = {
    title: "Menu",
    height: 200,
    width: 100,
};

let { title, ...rest } = options;
console.log(title);
console.log(rest);

//
let user = {
    name: "John",
    years: 30,
};

let { name: userName, years: age, isAdmin = false } = user;
console.log(userName); // John
console.log(age); // 30
console.log(isAdmin);

//

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function topSalary(salaries){
    let max = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if(max < salary){
            max = salary;
            maxName = name
        }
    }
    return maxName
}
console.log(topSalary(salaries))