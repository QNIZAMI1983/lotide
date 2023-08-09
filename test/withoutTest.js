const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const without = require('../without');

// Test cases using "it" format
it('should return a new array with items removed', function() {
  const result1 = without([1, 2, 3], [1]);
  assertEqual(eqArrays(result1, [2, 3]), true);

  const result2 = without(["1", "2", "3"], [1, 2, "3"]);
  assertEqual(eqArrays(result2, ["1", "2"]), true);

  const result3 = without([], []);
  assertEqual(eqArrays(result3, []), true);
});

it('should not modify the original array', function() {
  const words = ["hello", "world", "lighthouse"];
  const modifiedWords = without(words, ["lighthouse"]);
  assertEqual(eqArrays(words, modifiedWords), true);
});

