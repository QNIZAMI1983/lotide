const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for input ['Hello', 'Lighthouse', 'Labs']", () => {
    const testArray1 = ["Hello", "Lighthouse", "Labs"];
    const result1 = tail(testArray1);
    assert.deepEqual(result1, ["Lighthouse", "Labs"]);
  });
  
  it("should return [2, 3] for input [1, 2, 3]", () => {
    const testArray2 = [1, 2, 3];
    const result2 = tail(testArray2);
    assert.deepEqual(result2, [2, 3]);
  });
});