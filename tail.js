// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   }
// };

const tail = function (array) {
  return array.slice(1);
};

module.exports = tail;
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

