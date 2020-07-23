// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  }
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

const eqObjects = function (object1, object2) {
  const keys1 = (Object.keys(object1));
  const keys2 = (Object.keys(object2));
  console.log(keys1);
  console.log(keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {

    // check if the key is an array
    if (Array.isArray(object1[key])) {
      // check if the two arrays have the same value by calling eqArrays
      // because two arrays are never going to be the same  
      // console.log(object1[key]); d with d since they're arrays
      // console.log(object2[key]);
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      };
    }
    // check individual strings, values that are not arrays
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); 