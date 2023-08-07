const eqArrays = require('../eqArray');


// Test case 1: Arrays with the same elements in the same order
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // Output: true

// Test case 2: Arrays with the same elements in a different order
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // Output: false

// Test case 3: Arrays with different lengths
console.log(eqArrays([1, 2, 3], [1, 2])); // Output: false

// Test case 4: Arrays with elements of different data types
console.log(eqArrays([1, 2, '3'], [1, 2, 3])); // Output: false

// Test case 5: Arrays with elements of the same data types but different values
console.log(eqArrays(['apple', 'banana', 'cherry'], ['apple', 'orange', 'cherry'])); // Output: false

// Test case 6: Empty arrays
console.log(eqArrays([], [])); // Output: true

// Test case 7: Arrays with nested arrays
console.log(eqArrays([[1, 2], [3, 4]], [[1, 2], [3, 4]])); // Output: true

// Test case 8: Arrays with nested arrays, but with different order of nested arrays
console.log(eqArrays([[1, 2], [3, 4]], [[3, 4], [1, 2]])); // Output: false

// Test case 9: Arrays with nested arrays, but with different elements inside nested arrays
console.log(eqArrays([[1, 2], [3, 4]], [[1, 2], [3, 5]])); // Output: false
