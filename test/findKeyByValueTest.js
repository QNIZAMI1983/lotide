const assertEqual = require('./assertEqual'); // Import assertEqual function
const findKeyByValue = require('./findKeyByValue');

describe('findKeyByValue', function() {
  const myObject = {
    apple: 2,
    banana: 3,
    orange: 1,
    pear: 3
  };

  it('should find the key for the given value 3', function() {
    const result1 = findKeyByValue(myObject, 3);
    assertEqual(result1, 'banana');
  });

  it('should find the key for the given value 1', function() {
    const result2 = findKeyByValue(myObject, 1);
    assertEqual(result2, 'orange');
  });

  it('should not find any key for the given value 5', function() {
    const result3 = findKeyByValue(myObject, 5);
    assertEqual(result3, undefined);
  });
});
