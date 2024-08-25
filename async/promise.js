let promise1 = new Promise((resolve, reject) => {
  resolve("SUCCEES");
});
let promise2 = new Promise((resolve, reject) => {
  reject("ERROR");
});

//pending fullfiled rejected

promise1
  .then((value) => {
    console.log(value);
  })
  .finally(() => {
    console.log("promise1 finnaly");
  });

promise2
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise2 finnaly");
  });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err.message));

// with async await
async function fetchTodods(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}
fetchTodods("https://jsonplaceholder.typicode.com/todos");

function delay(ms, cb) {
  setTimeout(cb, ms);
}

delay(1000, () => {
  try {
    conole.log("Time has expired");
  } catch (error) {
    console.log(error.message);
  }
});

function delay1(ms, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb());
    }, ms);
  });
}

delay1(3000, () => {
  console.log("Time has expired");
}).catch((error) => console.log(error.message));

///

Promise.all([]);
Promise.allSettled([]);
Promise.race([]);
Promise.any([]);
Promise.resolve([]);
new Promise((resolve) => {
  resolve();
});
Promise.reject([]);
new Promise((reject) => {
  reject();
});

//
console.log(1);
setTimeout(() => {
  console.log(2), 0;
});
Promise.resolve(3).then((v) => {
  console.log(v);
});
console.log(4);

//