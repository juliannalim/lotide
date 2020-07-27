// const assertArraysEqual = function (actualArray, expectedArray) {
// if (typeof (actualArray) !== 'object' || typeof (expectedArray) !== 'object') {
//   return `🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`;
// }
// if (actualArray.length !== expectedArray.length) {
//   return (`🛑🛑🛑 Assertion Failed: ${[actualArray]}!== ${[expectedArray]}`);
// } for (let i = 0; i < actualArray.length; i++) {
//   if (actualArray[i] !== expectedArray[i]) {
//     return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
//   }

// }
// return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
// };
const eqArrays = require('./eqArrays');

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

// TEST CODE
// console.log(assertArraysEqual(['hello'], 'abc'));
// console.log(assertArraysEqual(123456, 123456));
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArraysEqual('potato', 'potatolife'));