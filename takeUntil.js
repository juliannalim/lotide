const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  }
};

const assertArraysEqual = function (actualArray, expectedArray) {
  if (typeof (actualArray) !== 'object' || typeof (expectedArray) !== 'object') {
    return `🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`;
  }
  if (actualArray.length !== expectedArray.length) {
    return (`🛑🛑🛑 Assertion Failed: ${[actualArray]}!== ${[expectedArray]}`);
  } for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
    }
  }
  return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
};
const takeUntil = function (array, callback) {
  const results = [];
  for (let elm of array) {
    if (callback(elm) === false) {
      results.push(elm);
    } else if (callback(elm) === true) {
      return results;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);