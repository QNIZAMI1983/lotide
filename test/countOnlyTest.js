const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

describe('countOnly', function() {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const itemsToCount = {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
  };

  it('should count occurrences of selected items', function() {
    const result = countOnly(firstNames, itemsToCount);
    assertEqual(result["Jason"], 1);
    assertEqual(result["Karima"], undefined);
    assertEqual(result["Fang"], 2);
    assertEqual(result["Agouhanna"], undefined);
  });

  it('should handle an empty items array', function() {
    const result = countOnly([], itemsToCount);
    assertEqual(Object.keys(result).length, 0);
  });

  it('should handle an empty itemsToCount object', function() {
    const result = countOnly(firstNames, {});
    assertEqual(Object.keys(result).length, 0);
  });
});
