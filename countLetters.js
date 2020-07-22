const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  }
};

const countLetters = function (wordsToCount) {
  const results = {};
  for (const letter of wordsToCount) {
    // excludes the space
    // if just used letter it would count three spaces
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house")['s'], 2);
assertEqual(countLetters("lighthouse in the house")['h'], 3);