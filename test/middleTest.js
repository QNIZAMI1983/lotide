const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("should return [] for input [1]", () => {
    assertArraysEqual(middle([1]), []);
  });

  it("should return [] for input [1, 2]", () => {
    assertArraysEqual(middle([1, 2]), []);
  });

  it("should return [2] for input [1, 2, 3]", () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3] for input [1, 2, 3, 4, 5]", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] for input [1, 2, 3, 4]", () => {
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return [3, 4] for input [1, 2, 3, 4, 5, 6]", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
