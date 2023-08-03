const eqArrays = function(arr1, arr2) {
    // Implementation of eqArrays function...
  };
  
  const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const value1 = object1[key];
      const value2 = object2[key];
  
      if (Array.isArray(value1) && Array.isArray(value2)) {
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    const result = eqObjects(actual, expected);
    if (result) {
      console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  
  // Test the assertObjectsEqual function with sample objects
  const obj1 = { a: '1', b: 2 };
  const obj2 = { b: 2, a: '1' };
  assertObjectsEqual(obj1, obj2); // This should pass and display a detailed object output
  
  const obj3 = { x: 1, y: [1, 2, 3] };
  const obj4 = { y: [1, 2, 3], x: 1 };
  assertObjectsEqual(obj3, obj4); // This should also pass and display a detailed object output
  
  const obj5 = { p: 10, q: [1, 2, 3] };
  const obj6 = { p: 10, q: [1, 2, 3, 4] };
  assertObjectsEqual(obj5, obj6); // This should fail and display a detailed object output
  