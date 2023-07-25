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
  