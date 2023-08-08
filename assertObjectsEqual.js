const eqObjects = require('./eqObjects')

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: Objects are equal`);
  } else {
    console.log(`🛑 Assertion Failed: Objects are not equal`);
  }
};

module.exports = assertObjectsEqual;


