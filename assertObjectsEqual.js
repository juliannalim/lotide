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
  // console.log(keys1);
  // console.log(keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    // console.log(key);

    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    else {
      // console.log("comparing", object1[key], "with", object2[key]);

      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Fa iled: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "3" };
console.log(assertObjectsEqual(ab, ba));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc));