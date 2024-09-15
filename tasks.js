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

