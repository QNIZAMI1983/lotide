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
  
  
  const middle = function(arr) {
    const length = arr.length;
    if (length <= 2) {
      return []; // Return an empty array for arrays with one or two elements
    } else if (length % 2 === 1) {
      const middleIndex = Math.floor(length / 2);
      return [arr[middleIndex]]; // Return a single middle element for arrays with odd length
    } else {
      const middleIndex1 = length / 2 - 1;
      const middleIndex2 = length / 2;
      return [arr[middleIndex1], arr[middleIndex2]]; // Return two middle elements for arrays with even length
    }
  };
  
  // Test cases
assertArraysEqual(middle([1]), []); // Should pass
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass