const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const flatten = require('../flatten');

describe('flatten', function() {
  it('should flatten a nested array', function() {
    const nestedArray = [[1, 2, 3], [4, 5], [6]];
    const flattenedArray = flatten(nestedArray);
    assertEqual(eqArrays(flattenedArray, [1, 2, 3, 4, 5, 6]), true);
  });

  it('should flatten a deeply nested array', function() {
    const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
    const flattenedArray = flatten(deeplyNestedArray);
    assertEqual(eqArrays(flattenedArray, [1, 2, 3, 4, 5]), true);
  });

  it('should flatten an array with mixed types', function() {
    const mixedArray = [1, [2, 'hello'], [true, false], [null]];
    const flattenedArray = flatten(mixedArray);
    assertEqual(eqArrays(flattenedArray, [1, 2, 'hello', true, false, null]), true);
  });

  it('should flatten an empty array', function() {
    const emptyArray = [];
    const flattenedArray = flatten(emptyArray);
    assertEqual(eqArrays(flattenedArray, []), true);
  });
});
