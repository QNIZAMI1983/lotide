const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
    it("returns 5 for [5, 6, 7]", () => {
        const testArray1 = [5, 6, 7];
        assert.strictEqual(head(testArray1), 5);
    });

    it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
        const testArray2 = ["Hello", "Lighthouse", "Labs"];
        assert.strictEqual(head(testArray2), "Hello");
    });

    it("returns 42 for [42]", () => {
        const testArray3 = [42];
        assert.strictEqual(head(testArray3), 42);
    });

    it("returns undefined for an empty array", () => {
        const testArray4 = [];
        assert.strictEqual(head(testArray4), undefined);
    });
});