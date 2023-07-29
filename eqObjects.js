const eqArrays = function(arr1, arr2) {
    // Implementation of eqArrays function...
  };
  
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
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
  
      // Check if the value is an array
      if (Array.isArray(value1) && Array.isArray(value2)) {
        // Use eqArrays function to compare arrays
        if (!eqArrays(value1, value2)) {
          return false;
        }
      } else {
        // Perform regular comparison for non-array values
        if (value1 !== value2) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  // Test the eqObjects function with sample objects
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
  
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  