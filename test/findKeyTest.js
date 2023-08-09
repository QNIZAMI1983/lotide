const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

describe('findKey', function() {
  const restaurants = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };

  it('should find the first key with stars === 2', function() {
    const result1 = findKey(restaurants, x => x.stars === 2);
    assertEqual(result1, "noma"); // It should output: "✅ Assertion Passed: noma === noma"
  });

  it('should find the first key with stars === 3', function() {
    const result2 = findKey(restaurants, x => x.stars === 3);
    assertEqual(result2, "Akaleri"); // It should output: "✅ Assertion Passed: Akaleri === Akaleri"
  });

  it('should not find any key with stars === 4', function() {
    const result3 = findKey(restaurants, x => x.stars === 4);
    assertEqual(result3, undefined); // It should output: "✅ Assertion Passed: undefined === undefined"
  });

  it('should not find any key with an empty object', function() {
    const result4 = findKey({}, x => x.stars === 2);
    assertEqual(result4, undefined); // It should output: "✅ Assertion Passed: undefined === undefined"
  });
});