const eqArrays = require('./eqArray');

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    // Check if both values are arrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // Use eqArrays function to compare arrays
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      // Perform regular comparison for non-array values
      if (value1 !== value2) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;
