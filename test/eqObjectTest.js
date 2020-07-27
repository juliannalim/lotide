const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns true when object same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: "2" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false when object are not the same", () => {
    const ab = { a: "1", b: "21" };
    const ba = { a: "1", b: "2" };
    assert.strictEqual(eqObjects(ab, ba), false);
  });

  // it("returns true when there are nested nested objects", () => {
  //   const ab = { a: { k: { y: 0, z: 1 }, j: 23 }, b: 2 };
  //   const ba = { a: { k: { y: 0, z: 1 }, j: 23 }, b: 2 };
  //   assert.strictEqual(eqObjects(ab, ba), true);
  // });

  // it("returns true when there are nested objects", () => {
  //   const ab = { a: { z: 1 }, b: 2 };
  //   const ba = { a: { z: 1 }, b: 2 };
  //   assert.strictEqual(eqObjects(ab, ba), true);
  // });
});