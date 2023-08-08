const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

describe('countLetters', function() {
  it('should count occurrences of letters in a sentence', function() {
    const result1 = countLetters("This is a sentence");
    assertEqual(result1['T'], 1);
    assertEqual(result1['H'], 1);
    assertEqual(result1['I'], 3);
    assertEqual(result1['S'], 3);
    assertEqual(result1['A'], 1);
    assertEqual(result1['E'], 2);
    assertEqual(result1['N'], 2);
    assertEqual(result1['C'], 1);
  });

  it('should handle an empty sentence', function() {
    const result2 = countLetters("");
    assertEqual(Object.keys(result2).length, 0);
  });

  it('should count letters with different cases', function() {
    const result3 = countLetters("aAaAaA");
    assertEqual(result3['A'], 3);
    assertEqual(result3['B'], undefined);
  });
});