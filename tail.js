// Function Assert Equal
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  // Tail Function
const tail = function(array) {
    if (array.length <= 1) {
      return []; // Return an empty array for arrays with one or zero elements
    } else {
      return array.slice(1); // Return a new array starting from the second element
    }
  };
  
  // TEST CASES
  const testArray1 = ["Hello", "Lighthouse", "Labs"];
  const result1 = tail(testArray1);
  console.log(result1); // prints ["Lighthouse", "Labs"]
  
  const testArray2 = [1, 2, 3];
  const result2 = tail(testArray2);
  console.log(result2); // prints [2, 3]
  