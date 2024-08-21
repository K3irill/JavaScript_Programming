"use strict";

const OPERATIONS = {
  sum: "+",
  sub: "-",
  multiply: "*",
  divide: "/",
};

function calculator({ a, b, operation }) {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;
    case OPERATIONS.sub:
      result = sub(a, b);
      break;
    case OPERATIONS.multiply:
      result = multiply(a, b);
      break;
    case OPERATIONS.divide:
      result = divide(a, b);
      break;
    default:
      break;
  }

  return result;
}
