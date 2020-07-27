const assertArraysEqual = require('../assertArraysEqual');


console.log(assertArraysEqual(['hello'], 'abc'));
console.log(assertArraysEqual(123456, 123456));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual('potato', 'potatolife'));