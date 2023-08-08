const assertEqual = require('../assertEqual');
const assertObjectsEqual = require('../assertObjectsEqual');

describe('assertObjectsEqual', function () {
    it('should pass for objects with same key-value pairs in different order', function () {
        const obj1 = { a: '1', b: 2 };
        const obj2 = { b: 2, a: '1' };
        assertObjectsEqual(obj1, obj2); // This should pass and display a detailed object output
    });

    it('should pass for objects with same key-value pairs and nested arrays', function () {
        const obj3 = { x: 1, y: [1, 2, 3] };
        const obj4 = { y: [1, 2, 3], x: 1 };
        assertObjectsEqual(obj3, obj4); // This should also pass and display a detailed object output
    });

    it('should fail for objects with different nested array lengths', function () {
        const obj5 = { p: 10, q: [1, 2, 3] };
        const obj6 = { p: 10, q: [1, 2, 3, 4] };
        assert.throws(() => assertObjectsEqual(obj5, obj6), Error); // This should fail and display an error
    });
});