const assertEqual = require('../assertEqual');
const assertObjectsEqual = require('../assertObjectsEqual');

it('should log failure for objects with different nested array lengths', function () {
    const obj5 = { p: 10, q: [1, 2, 3] };
    const obj6 = { p: 10, q: [1, 2, 3, 4] };

    // Capture the console output to test it
    const originalConsoleLog = console.log;
    let consoleOutput = [];
    console.log = message => consoleOutput.push(message);

    assertObjectsEqual(obj5, obj6);

    // Restore the original console.log
    console.log = originalConsoleLog;

    assertEqual(consoleOutput[0], '🛑 Assertion Failed: Objects are not equal');
});