const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

describe('takeUntil', function() {
  it('should return an array containing items until a condition is met (numbers)', function() {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assertArraysEqual(results1, [1, 2, 5, 7, 2]);
  });

  it('should return an array containing items until a condition is met (strings)', function() {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});
