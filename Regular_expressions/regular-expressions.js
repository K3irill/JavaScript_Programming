function containsDigit(str) {
    return /\d/.test(str);
}

console.log(containsDigit("sdlfjs1dlfj"));

function isEvenRegex(n) {
    return /^-?\d*[02468]$/.test(n);
}

console.log(isEvenRegex(66));

function validatePhoneNumber(str) {
    const regex = /^\+7\s?\(?\d{3,4}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return regex.test(str);
}

console.log(validatePhoneNumber("+7 (987) 654-32-10"));

function maskPassword(connectionString) {
    return connectionString.replace(/(password=)[^&]+/, "$1*****");
}

const connectionString =
    "jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345";
console.log(maskPassword(connectionString));

function replaceVowelsWithIndex(str) {
    const vowelsRegex = /[аеёиоуыэюяАЕЁИОУЫЭЮЯ]/g;

    return str.replace(vowelsRegex, (match, index) => index);
}

console.log(replaceVowelsWithIndex("Здравствуйте ребята!"));
