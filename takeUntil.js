const eqArrays = function (arr1, arr2) {
    // Implementation of eqArrays function...
};

const assertArraysEqual = function (actual, expected) {
    const areEqual = eqArrays(actual, expected);
    if (areEqual) {
        console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
};
const takeUntil = function (array, callback) {
    const results = [];
    for (let item of array) {
        if (callback(item)) {
            // If the callback returns a truthy value, stop collecting items and return the results
            return results;
        }
        results.push(item);
    }
    // If the callback never returned a truthy value, return the entire array
    return array;
};

// Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // It should output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // It should output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]
