// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   }
// };

const findKeyByValue = function (bestTVShowsByGenre, movieName) {
  for (let bestShow in bestTVShowsByGenre) {
    // console.log(bestShow); --> gives us the key but we need value
    // bestTVShowsByGenre[bestShow] gives us the value aka the "the Wire"
    // comparing the value to movieName if it is the same return the key 
    if (bestTVShowsByGenre[bestShow] === movieName) {
      return bestShow;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");