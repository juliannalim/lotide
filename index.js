const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

module.exports = {
  assertArraysEqual,
  assertEqual,
  countOnly,
  eqArrays,
  eqObjects,
  findKeyByValue,
  head,
  letterPositions,
  middle,
  tail
};