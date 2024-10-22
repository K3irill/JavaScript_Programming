const factorial = (n) => {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
};
console.log(factorial(5));

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonachi(n - 1) + fibonachi(n - 2);
};
console.log(fibonachi(8));
//
const array = [
    1, 10, 4, 5, 8, 2, 7, 11, 29, 3, 6, 9, -1, -90, -5, 0, 90, 16, 29, 60, 100,
    -100,
];
let countForLS = 0;
function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        countForLS += 1;
        if (arr[i] === item) {
            return { index: i, item: arr[i] };
        }
    }
}

linearSearch(array, 9);
console.log(countForLS);

//binarySearch
let countForBS = 0;
function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        countForBS += 1;
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}
binarySearch(array, 9);
console.log(countForBS);

//sort 1

let countSort = 0;
function sort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            countSort += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}
console.log(sort(array));
console.log(countSort);
// sort 2
let countBubbleSort = 0;
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            countBubbleSort += 1;
        }
    }
    return array;
}
console.log(bubbleSort(array));
console.log(countBubbleSort);

// quickSort
let countQuickSort = 0;
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
        countQuickSort += 1;
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}
quickSort(array);
console.log(countQuickSort);
