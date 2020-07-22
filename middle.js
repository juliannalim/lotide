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

const middle = function (array) {
  let arrLen = array.length;
  let middleNum = [];
  if (arrLen < 3) {
    return middleNum;
  }
  else if (arrLen % 2 === 0) {
    // remember index count at 0
    // math arrLen/2 - 1 has the -1 b/c representation of the index of the spot in the array (0, 1, etc)
    // therefore need to -1 to get an accurate representation 
    // ex arrLen = 6/2 = 3 which is the 4th index in the array, so -1 which gives us 3 counting array 3rd spot
    middleNum.push(array[(arrLen / 2) - 1]); // ---> 3
    middleNum.push(array[arrLen / 2]); // --> print 4
  } else {
    // math arrLen - 1 = 4 / 2 = 2 but in the index that represents 3 
    middleNum.push(array[(arrLen - 1) / 2]);
    // console.log(array.length);
  }
  return middleNum;
};


console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2]), [])); // => []

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]