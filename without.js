const assertArraysEqual = function (actualArray, expectedArray) {
  if (typeof (actualArray) !== 'object' || typeof (expectedArray) !== 'object') {
    return `🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`;
  }
  if (actualArray.length !== expectedArray.length) {
    return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
  } for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
    }
  }
  return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
};

const eqArrays = function (arrayOne, arrayTwo) {
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
    return false;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const without = function (original, itemsToRemove) {
  let newList = [];
  for (let i = 0; i < original.length; i++) {
    let foundMatch = false;
    for (let j = 0; j < itemsToRemove.length; j++) {

      // console.log('original', original[i]);
      // console.log('itemsToRemove', itemsToRemove[j]);
      // console.log('');

      // if (original[i] !== itemsToRemove[j]) {
      //   newList.push(original[i]);
      // }

      if (original[i] === itemsToRemove[j]) {
        // if this is true it won't push
        foundMatch = true;
      }
    }
    // within the i for loop, outside of j for loop to make sure we compare the entire j array to i array
    if (!foundMatch) {
      // if foundMatch stays false aka nothing changed, push original[i]
      newList.push(original[i]);
    }
  }
  return newList;
}

console.log(without([1, 2, 3], [1, 3]))// => [2, 3]

console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

console.log(without([2, 1, 2, 3], [2, 5]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["hello", "world"]));