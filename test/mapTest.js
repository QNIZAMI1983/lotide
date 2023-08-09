const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

describe('map', function() {
  it('should map words to their lengths', function() {
    const words1 = ["apple", "banana", "cherry"];
    const results1 = map(words1, word => word.length);
    const expected1 = [5, 6, 6];
    assertArraysEqual(results1, expected1); // It should output: ✅ Assertion Passed: [5, 6, 6] === [5, 6, 6]
  });

  it('should map numbers to their squares', function() {
    const numbers = [1, 2, 3, 4, 5];
    const results2 = map(numbers, num => num * num);
    const expected2 = [1, 4, 9, 16, 25];
    assertArraysEqual(results2, expected2); // It should output: ✅ Assertion Passed: [1, 4, 9, 16, 25] === [1, 4, 9, 16, 25]
  });

  it('should map words to uppercase', function() {
    const fruits = ["apple", "banana", "orange"];
    const results3 = map(fruits, fruit => fruit.toUpperCase());
    const expected3 = ["APPLE", "BANANA", "ORANGE"];
    assertArraysEqual(results3, expected3); // It should output: ✅ Assertion Passed: ["APPLE", "BANANA", "ORANGE"] === ["APPLE", "BANANA", "ORANGE"]
  });
});
