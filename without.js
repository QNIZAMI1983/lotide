const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; // Return false if arrays have different lengths
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false; // Return false if elements don't match
      }
    }
  
    return true; // Return true if all elements match
  };
  
  const without = function(source, itemsToRemove) {
    return source.filter(item => !itemsToRemove.includes(item));
  };
  
  // Test case to check that the original array is not modified
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  assertArraysEqual(words, ["hello", "world", "lighthouse"]); // The original array should remain unchanged
  
  // Additional test cases
  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  assertArraysEqual(without([], []), []);
  