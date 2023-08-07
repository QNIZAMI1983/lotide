const assertArraysEqual = require('../assertArraysEqual');

// Test the assertArraysEqual function with sample arrays
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Output: ✅ Assertion Passed: [1,2,3] === [1,2,3]
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Output: 🛑 Assertion Failed: [1,2,3] !== [1,2,4]