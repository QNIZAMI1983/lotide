
const countLetters = function(sentence) {
    const letterCounts = {};
    for (const char of sentence) {
      if (/[a-zA-Z]/.test(char)) {
        const letter = char.toUpperCase();
        if (letterCounts[letter]) {
          letterCounts[letter]++;
        } else {
          letterCounts[letter] = 1;
        }
      }
    }
    return letterCounts;
  };
  
  module.exports = countLetters;