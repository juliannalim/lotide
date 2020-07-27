const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('returns ["2", "3"] for ["1", "2", "3", "4"]', () => {
    assert.deepEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);
  });

  it('returns ["c"] for ["a", "b", "c", "d", "e"]', () => {
    assert.deepEqual(middle(["a", "b", "c", "d", "e"]), ["c"]);
  });

});

// console.log(assertArraysEqual(middle([1]), [])); // => []
// console.log(assertArraysEqual(middle([1, 2]), [])); // => []

// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]

// console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]