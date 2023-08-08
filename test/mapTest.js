const assertArraysEqual = require ('../assertArraysEqual');
const map = require('../map');

/Mapping words to their lengths:
const words1 = ["apple", "banana", "cherry"];
const results1 = map(words1, word => word.length);
const expected1 = [5, 6, 6];
assertArraysEqual(results1, expected1); // It should output: ✅ Assertion Passed: [5, 6, 6] === [5, 6, 6]

//Mapping numbers to their squares:
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, num => num * num);
const expected2 = [1, 4, 9, 16, 25];
assertArraysEqual(results2, expected2); // It should output: ✅ Assertion Passed: [1, 4, 9, 16, 25] === [1, 4, 9, 16, 25]

//Mapping words to uppercase:
const fruits = ["apple", "banana", "orange"];
const results3 = map(fruits, fruit => fruit.toUpperCase());
const expected3 = ["APPLE", "BANANA", "ORANGE"];
assertArraysEqual(results3, expected3); // It should output: ✅ Assertion Passed: ["APPLE", "BANANA", "ORANGE"] === ["APPLE", "BANANA", "ORANGE"]
