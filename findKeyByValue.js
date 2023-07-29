const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  const findKeyByValue = function(object, value) {
    // Loop through each key-value pair in the object
    for (const key in object) {
      // Check if the current value matches the given value
      if (object[key] === value) {
        // If it matches, return the current key
        return key;
      }
    }
    // If no key with the given value is found, return undefined
    return undefined;
  };

  const myObject = {
    apple: 2,
    banana: 3,
    orange: 1,
    pear: 3
  };
  
  console.log(findKeyByValue(myObject, 3)); // Output: 'banana'
  console.log(findKeyByValue(myObject, 1)); // Output: 'orange'
  console.log(findKeyByValue(myObject, 5)); // Output: undefined
  