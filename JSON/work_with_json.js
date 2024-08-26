let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null,
};
//! JSON.stringify
let json = JSON.stringify(student, null, 2);

console.log(json);

//! JSON.parse
const value = JSON.parse(
    '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'
);
console.log(value);

//---------------------

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function (key, value) {
    if (key == "date") return new Date(value);
    return value;
});

console.log(meetup.date.getDate());
