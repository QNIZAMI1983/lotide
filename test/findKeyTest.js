const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

// Test cases
const restaurants = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
};

// Test case 1: Find the first key with stars === 2
const result1 = findKey(restaurants, x => x.stars === 2);
assertEqual(result1, "noma"); // It should output: "✅ Assertion Passed: noma === noma"

// Test case 2: Find the first key with stars === 3
const result2 = findKey(restaurants, x => x.stars === 3);
assertEqual(result2, "Akaleri"); // It should output: "✅ Assertion Passed: Akaleri === Akaleri"

// Test case 3: Find the first key with stars === 4 (not present in the object)
const result3 = findKey(restaurants, x => x.stars === 4);
assertEqual(result3, undefined); // It should output: "✅ Assertion Passed: undefined === undefined"

// Test case 4: Find the first key with an empty object
const result4 = findKey({}, x => x.stars === 2);
assertEqual(result4, undefined); // It should output: "✅ Assertion Passed: undefined === undefined"
