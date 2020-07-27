// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   }
// };


const countOnly = function (listOfName, itemsToCount) {
  const results = {};

  for (const name of listOfName) {
    // if itemsToCount[name] === true
    //skip any itemsToCount[name] that is not true
    // aka "jason" === true
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
    // console.log(name);
  }

  return results;
}

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);