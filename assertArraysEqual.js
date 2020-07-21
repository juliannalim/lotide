const assertArraysEqual = function (actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    return (`🛑🛑🛑 Assertion Failed: ${[actualArray]}!== ${[expectedArray]}`);
  } for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
    }
  }
  return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
};


console.log(assertArraysEqual(['hello'], 'abc'));
console.log(assertArraysEqual(123456, 123456));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual('potato', 'potatolife'));