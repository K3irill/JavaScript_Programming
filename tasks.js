//1
// function checkDataType(value) {
//     return typeof value;
// }

// console.log(checkDataType(42));
// console.log(checkDataType("Hello"));
// console.log(checkDataType([1, 2, 3]));

//2
// function convertToString(num) {
//     return num.toString(); //String(num)
// }

// console.log(convertToString(2));

//3
// function isEven(num) {
//     return num % 2 == 0;
// }
// console.log(isEven(3));

//4
// function isEmptyString(str) {
//     return str === "";
// }
// console.log(isEmptyString(' '))

//5
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

// // or

// // arr.forEach((num) => {
// //     if (num > max) {
// //         max = num;
// //     }
// // });
// // for (let num of arr) {
// //     if (num > max) {
// //         max = num;
// //     }
// // }   // arr.forEach((num) => {
// //     if (num > max) {
// //         max = num;
// //     }
// // });
// // for (let num of arr) {
// //     if (num > max) {
// //         max = num;
// //     }
// // }
//     return max;
// }
// console.log(findMax([1, 4, 80, 1, 5, 2, 90]));

// function findMaxWithMath(arr) {
//     return Math.max(...arr);
// }
// console.log(findMaxWithMath([1, 4, 80, 1, 5, 2, 90]));

//6
// function sumArray(arr) {
//     let newArr = arr.reduce((num, acc) => (num + acc), 0);
//     return newArr;
// }
// console.log(sumArray([1, 4, 80, 1, 5, 2, 90]));

//7
// function stringToArray(str) {
//     return str.split(" ");
// }

// console.log(stringToArray("This is wonderful place!"));

//8
// function containsValue(arr, num) {
//    return arr.includes(num);
// }
// console.log(containsValue([1, 4, 80, 1, 5, 2, 90], 1));

//9
// function concatStrings(str1, str2) {
//     return `${str1} ${str2}`;
// }
// console.log(concatStrings('Hi', 'man!'));

// let user = {
//     name: "Kail",
//     age: 20,
// };
// let job = {
//     name_job: "Kail",
//     experience: "2 years",
// };

//10
// function mergeObjects(obj1, obj2) {
//     return Object.assign(obj1, obj2);
//     //or {...obj1, ...obj2}
// }
// console.log(mergeObjects(user, job));

//conditional branching

//1

// function isPositive(num) {
//     return num > 0 ? "Positive" : "Negative";
// }
// console.log(isPositive(-3));

//2
// function compareNumbers(num1, num2) {
//     if (num1 === num2) {
//         return "Equal";
//     }
//     if (num1 > num2) {
//         return "Greater";
//     } else {
//         return "Lesser";
//     }
// }
// console.log(compareNumbers(3, 4));

//3
// function isEven2(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

//4
// function checkAge(value) {
//     return value >= 18 ? "Allowed" : "Not allowed";
// }

//5
// function findMaxOfThree(num1, num2, num3) {
//     if(num1 >= num2 && num1 >= num3){
//         return num1
//     }else if(num2 >= num1 && num2 >= num3){
//         return num2
//     }else{
//         return num3
//     }
//     // return Math.max(num1, num2, num3);
// }
// console.log(findMaxOfThree(4, 2, 3));

//6
// function isInRange(num) {
//     return num >= 1 && num <= 100 ? "In range" : "Out of range";
// }
// console.log(isInRange(101));

//7
// function isLeapYear(year) {
//     if (year % 4 === 0 && (year % 100 === 0 || year % 400 === 0)) {
//         return true;
//     }
//     return false;
// }
// console.log(isLeapYear(2000));

//8
// function login(login, password) {
//     return login === "admin" && password === "12345"
//         ? "Access granted"
//         : "Access denied";
// }
// console.log(login('admin', '12345'));

//9
// function getTimeOfDay(hour) {
//     if (hour >= 5 && hour < 12) {
//         return "Morning";
//     } else if (hour >= 12 && hour < 18) {
//         return "Afternoon";
//     } else return "Evening";
// }
// console.log(getTimeOfDay(11.50));

//10
// function gradeClassifier(score) {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// console.log(gradeClassifier(95));
// console.log(gradeClassifier(32));

//The nullish coalescing operator (??)

//1
// function getDefaultName(userName) {
//     return userName ?? "Guest";
// }

// console.log(getDefaultName("Alice"));
// console.log(getDefaultName(undefined));
// console.log(getDefaultName(null));

//2

// function getNumber(num){
//     return num ?? 0
// }
// console.log(getNumber(42));
// console.log(getNumber(undefined));
// console.log(getNumber(null));

//3

// const userSettings = {
//     theme: "dark",
// };

// function getUserSettings(obj) {
//     return obj.theme ?? "light";
// }
// console.log(getUserSettings(userSettings));
// console.log(getUserSettings({}));
// console.log(getUserSettings({ theme: null }));

//4

// function getElement(arr, index){
//     return arr[index] ?? "No element"
// }
// console.log(getElement([1, 2, 3], 1));
// console.log(getElement([1, 2, 3], 5));
// console.log(getElement([], 0));

//5

// function getScore(score){
//     return score ?? "No score"
// }
// console.log(getScore(95));
// console.log(getScore(undefined));
// console.log(getScore(null));

//objects

//1

// const person = {
//     name: "Kail",
//     age: 20,
//     greet() {
//         console.log(this.name);
//     },
// };
// person.greet();

//2

// const car = { make: "Toyota", model: "Corolla" };

// function getProperty(obj, prop) {
//     return obj[prop] ?? "Property not found";
// }
// console.log(getProperty(car, "make"));
// console.log(getProperty(car, "year"));

//3

// const calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     subtract(a, b) {
//         return a - b;
//     },
// };

// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(10, 4));

//4

// function cloneObject(obj) {
//     return Object.assign(obj);
//     //or { ...obj }
// }

// const original = { name: "Alice", age: 25 };
// const copy = cloneObject(original);
// console.log(copy);

//5

// const person = {
//     name: "Kail",
//     age: 20,
//     greet() {
//         console.log(this.name);
//     },
// };

// function countProperties(obj) {
//     return Object.keys(obj).length;
//     //or
//     let count = 0;
//     for (let key in obj) {
//         count++;
//     }
//     return count;
// }
// console.log(countProperties(person));

//* deep clone
// const _ = require("lodash");

// let userExample = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: {
//             maxWidth: "800px",
//             minWidth: "400px",
//         },
//     },
// };

// let cloneUser = {};

// //not deep
// for (let key in userExample) {
//     cloneUser[key] = userExample[key];
// }

// let cloneUser2 = {};

// cloneUser2 = _.cloneDeep(userExample);
// cloneUser2.name = "Kail";

// let cloneUser3 = {};

// cloneUser3 = structuredClone(userExample);

// cloneUser3.name = "Taller";

// console.log(cloneUser);
// console.log(cloneUser2);
// console.log(cloneUser3);
//*

//6

// function deleteProperty(obj, prop) {
//     delete obj[prop];
//     return obj;
// }
// deleteProperty(cloneUser3, "name");
// console.log(cloneUser3);

//7
// const numsObj = {
//     one: 100,
//     two: 200,
//     title: null,
// };

// function increaseValues(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] += 1;
//         }
//     }

//     return obj;
// }
// console.log(increaseValues(numsObj));

//8

// function hasProperty(obj, prop) {
//     return prop in obj;
//     //or
//     return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty(numsObj, "three"));

//9

// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }

// const obj1 = { a: 2, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2));

// //10

// function findValue(obj, value) {
//     let result = [];
//     for (let key in obj) {
//         if (obj[key] === value) {
//             result.push(key);
//         }
//     }

//     return result.length ? result : "Value not found";
// }
// console.log(findValue(obj1, 2));

// arrays

//1

// function filterEvenNumbers(arr) {
//     return arr.filter((num) => num % 2 === 0);
// }

const ARRAY_NUMBERS = [29, 45, 25, 56, 87, 12, 90, 31, 56, 73, 6];
// console.log(filterEvenNumbers(ARRAY_NUMBERS));
//addition of adjacent numbers
// let result = [];
// for (let i = 0, j = 1; i < ARRAY_NUMBERS.length; i += 2, j += 2) {
//     if (ARRAY_NUMBERS[j] !== undefined) {
//         result.push(ARRAY_NUMBERS[i] + ARRAY_NUMBERS[j]);
//     } else {
//         result.push(ARRAY_NUMBERS[i]);
//     }
// }
//chain addition
// let result2 = [];
// for (let i = 0, j = 1; i < ARRAY_NUMBERS.length; i++, j++) {
//     if (ARRAY_NUMBERS[j] !== undefined) {
//         result2.push(ARRAY_NUMBERS[i] + ARRAY_NUMBERS[j]);
//     } else {
//         result2.push(ARRAY_NUMBERS[i]);
//     }
// }
// console.log(result2);

//2

// function toUpperCaseString(arr) {
//     return arr.map((str) => str.toUpperCase());
// }

const ARRAY_STRINGS = ["header", "aside", "main", "footer", "header", "rar"];
// console.log(toUpperCaseString(ARRAY_STRINGS));

//3

// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray(ARRAY_NUMBERS));

//4

// function concatArrays(...arr) {
//     return arr.reduce((acc, arr) => acc.concat(arr), []);
// }
// console.log(concatArrays(ARRAY_NUMBERS, ARRAY_STRINGS));

//5

// function countUnique(arr) {
//     return new Set(arr).size;
// }
// console.log(countUnique(ARRAY_NUMBERS));

//6

// function findLongestWord(arr) {
//     let max = 0;
//     arr.map((str) => {
//         if (str.length > max) {
//             max = str.length;
//         }
//     });
//     return arr.filter((str) => str.length >= max);
//     //or
//     return arr.reduce(
//         (longest, str) => (str.length > longest.length ? str : longest),
//         ""
//     );
// }
// console.log(findLongestWord(ARRAY_STRINGS));

//7

// function groupBySign(arr) {
//     const rsObj = {
//         positive: [],
//         negative: [],
//     };
//     arr.forEach((num) =>
//         num > 0
//      ? rsObj["positive"].push(num)
//      : rsObj["negative"].push(num)
//     );
//     return rsObj;
// }
// console.log(groupBySign(ARRAY_NUMBERS));

//8

// function frequencyCounter(arr) {
//     const rsObj = {};
//     for (const item of arr) {
//         rsObj[item] = rsObj[item] ? rsObj[item] + 1 : 1;
//         //or
//         // rsObj[item] = (rsObj[item] || 0) + 1;
//     }
//     return rsObj;
// }
// console.log(frequencyCounter(ARRAY_STRINGS));

//9

// function isPalindromeArray(arr) {
//     return arr.filter((str) => str === str.split("").reverse().join(""));
// }
// console.log(isPalindromeArray(ARRAY_STRINGS));

//10
// const arrOne = ["apple", "grapes", "lemon"];
// const arrTwo = [2, 1, 3];

// function zipArrays(arr1, arr2) {
//     return arr1.map((key, index)=> ({[key]: arr2[index]}) )
//     //or
//     const rsObject = {};
//     for (let i = 0; i < arr1.length; i++) {
//         rsObject[arr1[i]] = arr2[i];
//     }

//     return rsObject;
// }
// console.log(zipArrays(arrOne, arrTwo));

//Destructive assignment

//1
// const user = {
//     name: "John",
//     age: 30,
//     email: "john@example.com",
// };

// let { name, email } = user;
// console.log(name, email);

//2

// const numbers = [10, 20, 30, 40, 50];

// const [firstEl, , thirdEl] = numbers;

//3

// const person = {
//     firstName: "Alice",
//     lastName: "Smith",
// };

// const { name, surname } = person;

//4

// const product = {
//     id: 1,
//     details: {
//         name: "Laptop",
//         price: 1200,
//     },
// };

// const {
//     details: { name, price },
// } = product;
// console.log(name + " " + price);

//5

// function getUser() {
//     return {
//         name: "Bob",
//         age: 25,
//     };
// }

// const { name, age, location = "unknown" } = getUser();
// console.log(`${name} ${age} ${location}`);

//JSON conversion

//1
// let userJson = {
//     users: [
//         { id: 1, name: "John Doe", age: 28, email: "john.doe@example.com" },
//         { id: 2, name: "Jane Smith", age: 32, email: "jane.smith@example.com" },
//         { id: 3, name: "Sam Green", age: 22, email: "sam.green@example.com" },
//     ],
// };

// let data = JSON.parse(userJson);

// data.users.forEach((user) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
// });

//2

// const productJson = `{
//     "products": [
//     {"id": 1, "name": "Laptop", "price": 900, "category": "Electronics"},
//     {"id": 2, "name": "Book", "price": 20, "category": "Education"},
//     {"id": 3, "name": "Smartphone", "price": 600, "category": "Electronics"},
//     {"id": 4, "name": "Pen", "price": 3, "category": "Stationery"},
//     {"id": 5, "name": "Headphones", "price": 150, "category": "Electronics"}
//   ]
// }`;

// let dataProducts = JSON.parse(productJson);

// const electronicsProduct = dataProducts.products.filter(
//     (product) => product.category === "Electronics" && product.price > 100
// );
// console.log(electronicsProduct);

//3

// let studentsJson = `{
//   "name": "Alice",
//   "age": 21,
//   "grades": {"math": 85, "science": 90, "english": 88},
//   "address": "123 Main St, New York"
// }
// `;

// let studentsObj = JSON.parse(studentsJson);

// studentsObj["address"] = "Wall Street";
// studentsObj["graduationYear"] = 2025;

// const updatedStudentJson = JSON.stringify(studentsObj);
// console.log(updatedStudentJson);

//4

// let jsonOne = `{
//   "firstName": "Emily",
//   "lastName": "Clark",
//   "age": 29
// }
// `;
// let jsonTwo = `{
//   "email": "emily.clark@example.com",
//   "phone": "123-456-7890"
// }
// `;

// let objOne = JSON.parse(jsonOne);
// let objTwo = JSON.parse(jsonTwo);

// let mergeObj = JSON.stringify({ ...objOne, ...objTwo }); //or use Object.assign(objOne, objTwo)
// console.log(mergeObj);

//Map and Set

//1

// let studentsInfo = new Map();
// studentsInfo.set(101, "John Doe");
// studentsInfo.set(102, "Kane Smith");
// studentsInfo.set(103, "Alice Johnson");

// const studentName = studentsInfo.get(102);

// console.log(studentName);

//2

// let countryInfo = new Map([
//     ["US", "United States"],
//     ["FR", "France"],
//     ["IN", "India"],
//     ["JP", "Japan"],
// ]);

// countryInfo.forEach((countryName, countryCode) => {
//     console.log(`${countryCode}: ${countryName}`);
//   });

// // for (const code of countryInfo.values()) {
// //     console.log(code);
// // }

//3 Remove Duplicates from an Array Using Set

// const someArr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9];

// let setStore = [...new Set(someArr)]

// console.log(setStore);

//4 Check for an Element in a Set

// let registeredUser = new Set(["john_doe", "jane_smith", "sam_green"]);
// console.log(registeredUser);

// function register(username) {
//     if (registeredUser.has(username)) {
//         return `User "${username}" already exists in the Set.`;
//     } else {
//         registeredUser.add(username);
//         return `User "${username}" has been successfully added.`;
//     }
// }
// console.log(register("kail_rich"));
// console.log(register("kail_rich"));

//5

// let setA = new Set([1, 2, 3, 4]);
// let setB = new Set([3, 4, 5, 6]);

// //Union

// const unionSet = new Set([...setA, ...setB]);
// console.log("Union:", [...unionSet]);

// //intersection
// const intersectionSet = new Set([...setA].filter((num) => setB.has(num)));
// console.log("Intersection:", [...intersectionSet]);

// //difference
// const differenceSet = new Set([...setA].filter((num) => !setB.has(num)));
// console.log("Difference:", [...differenceSet]);

//recursion

//1  Calculate Factorial Using Recursion
// function factorial(a) {
//     if (a === 0 || a === 1) {
//         return a;
//     } else {
//         return a * factorial(a - 1);
//     }
// }
// console.log(factorial(5));

//2 Sum of Array Elements Using Recursion

// function sum(arr) {
//     if (arr.length === 0) {
//         return 0;
//     } else {
//         return arr[0] + sum(arr.slice(1));
//     }
// }
// console.log(sum([1, 2, 3, 4, 5]));

//3

// function reverseString(str) {
//     if (str === "") {
//         return "";
//     } else {
//         return str[str.length - 1] + reverseString(str.slice(0, -1));
//     }
// }
// console.log(reverseString("hello"));

//Promises

//1
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url.includes('error')) {
//                 reject("Request failed");
//             } else {
//                 resolve({
//                     id: 1,
//                     name: "Product 1",
//                     price: 100,
//                 });
//             }
//         }, 2000);
//     });
// }

// fetchData("https://api.com/product")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

//2

// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 1 completed");
//         }, Math.random() * 2000 + 1000);
//     });
// }

// function task2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 2 completed");
//         }, Math.random() * 2000 + 1000);
//     });
// }

// function task3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task 3 completed");
//         }, Math.random() * 2000 + 1000);
//     });
// }

// task1()
//     .then((result) => {
//         console.log(result);
//         return task2();
//     })
//     .then((result) => {
//         console.log(result);
//         return task3();
//     })
//     .then((result) => console.log(result));

//3

// function fetchUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = [
//                 { id: 1, name: "John", age: 22 },
//                 { id: 2, name: "Alice", age: 17 },
//                 { id: 3, name: "Bob", age: 30 },
//             ];
//             resolve(users);
//         }, 1000);
//     });
// }

// function filterAdultUsers(users) {
//     return new Promise((resolve) => {
//         const adultUsers = users.filter((user) => user.age >= 18);
//         resolve(adultUsers);
//     });
// }

// function saveUsers(users) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(
//                 "Отфильтрованные пользователи сохранены на сервере:",
//                 users
//             );
//             resolve("Данные успешно сохранены!");
//         }, 1000);
//     });
// }

// fetchUsers()
//     .then((users) => {
//         console.log("Полученные пользователи:", users);
//         return filterAdultUsers(users);
//     })
//     .then((adultUsers) => {
//         console.log("Отфильтрованные пользователи:", adultUsers);
//         return saveUsers(adultUsers);
//     })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error("Произошла ошибка:", error);
//     });

//codewars

//1

function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0;
    }

    const min = Math.min(...array);
    const max = Math.max(...array);

    let result = 0;

    for (let num of array) {
        result += num;
    }

    return result - min - max;
}

console.log(sumArray([0, 1, 6, 10, 10]));

//or
sumArray = (a) =>
    a
        ? a
              .sort((x, y) => x - y)
              .slice(1, -1)
              .reduce((s, e) => s + e, 0)
        : 0;
//or
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) -
              Math.min(...array) -
              Math.max(...array)
        : 0;
}

//2

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
};
