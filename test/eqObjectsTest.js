const assertEqual = require('../assertEqual'); // Import your assertEqual module
const eqObjects = require('../eqObjects'); // Import your eqObjects function

describe('eqObjects', function() {
  it('should return true for objects with same key-value pairs in different order', function() {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it('should return false for objects with different key-value pairs', function() {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it('should return true for objects with same key-value pairs and nested arrays in different order', function() {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it('should return false for objects with different key-value pairs and nested arrays', function() {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});

