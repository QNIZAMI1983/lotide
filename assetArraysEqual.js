const eqArrays = function(arr1, arr2) {
    // Implementation of eqArrays function...
  };
  
  const assertArraysEqual = function(actual, expected) {
    const areEqual = eqArrays(actual, expected);
    if (areEqual) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };
  
  // Test the assertArraysEqual function with sample arrays
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // Output: ✅ Assertion Passed: [1,2,3] === [1,2,3]
  assertArraysEqual([1, 2, 3], [1, 2, 4]); // Output: 🛑 Assertion Failed: [1,2,3] !== [1,2,4]