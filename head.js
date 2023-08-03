// Assert function
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  

  // Function for Head
const head = function(array) {
    if (array.length === 0) {
      return undefined; // Empty array should yield undefined as its head
    } else {
      return array[0]; // Return the first item of the array
    }
  };
  
  // TEST CASES
  const testArray1 = [5, 6, 7];
  assertEqual(head(testArray1), 5); // The first item of [5, 6, 7] is 5
  
  const testArray2 = ["Hello", "Lighthouse", "Labs"];
  assertEqual(head(testArray2), "Hello"); // The first item of ["Hello", "Lighthouse", "Labs"] is "Hello"
  
  const testArray3 = [42];
  assertEqual(head(testArray3), 42); // The first item of [42] is 42
  
  const testArray4 = [];
  assertEqual(head(testArray4), undefined); // An empty array should yield undefined as its head
  