const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns idk', () => {
    assert.deepEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
});
// console.log(letterPositions('hello'));
// console.log(assertArraysEqual(letterPositions('hello').e, [1]));