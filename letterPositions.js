// const eqArrays = function (arrayOne, arrayTwo) {
//   if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
//     return false;
//   }
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (actualArray, expectedArray) {
//   if (typeof (actualArray) !== 'object' || typeof (expectedArray) !== 'object') {
//     return `🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`;
//   }
//   if (actualArray.length !== expectedArray.length) {
//     return (`🛑🛑🛑 Assertion Failed: ${[actualArray]}!== ${[expectedArray]}`);
//   } for (let i = 0; i < actualArray.length; i++) {
//     if (actualArray[i] !== expectedArray[i]) {
//       return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
//     }
//   }
//   return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
// };

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // excluding spaces 
    if (i !== ' ') {
      // sentence[i] gives me the individual letters
      if (results[sentence[i]]) {
        // if the letter exisit then push the next index number to results
        results[sentence[i]].push(i);
      } else {
        // if it doesn't exist, add index position
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions('hello'));
// console.log(assertArraysEqual(letterPositions('hello').e, [1]));