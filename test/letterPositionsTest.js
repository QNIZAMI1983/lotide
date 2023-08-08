const assertEqual = require('../assertEqual');
const letterPositions = require('../letterPositions');

// Test case 1: Test letter positions in a simple sentence
const result1 = letterPositions('hello');
assertEqual(JSON.stringify(result1['H']), JSON.stringify([0]));
assertEqual(JSON.stringify(result1['E']), JSON.stringify([1]));
assertEqual(JSON.stringify(result1['L']), JSON.stringify([2, 3]));
assertEqual(JSON.stringify(result1['O']), JSON.stringify([4]));

// Test case 2: Test letter positions in a sentence with mixed characters
const result2 = letterPositions('H3llo W0rld');
assertEqual(JSON.stringify(result2['H']), JSON.stringify([0]));
assertEqual(JSON.stringify(result2['L']), JSON.stringify([3]));
assertEqual(JSON.stringify(result2['W']), JSON.stringify([7]));
assertEqual(JSON.stringify(result2['R']), JSON.stringify([9]));

// Test case 3: Test letter positions in an empty sentence
const result3 = letterPositions('');
assertEqual(JSON.stringify(result3), JSON.stringify({}));
