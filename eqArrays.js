// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   }
// };

const eqArrays = function (arrayOne, arrayTwo) {
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
    return false;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    // if (Array.isArray(arrayOne[i])) {
    //   if (!eqArrays(arrayOne[i], arrayTwo[i])) {
    //     return false;
    //   }
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays("1", "2", "3", ["1", "2", "3"]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
