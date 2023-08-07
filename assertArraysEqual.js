const eqArrays = require('./eqArray');

const assertArraysEqual = function (actual, expected) {
  const areEqual = eqArrays(actual, expected);
  if (areEqual) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;