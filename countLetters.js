const countLetters = function (sentence) {
  const letterCounts = {};
  for (const char of sentence) {
    if (/[a-zA-Z]/.test(char)) {
      if (letterCounts[char]) {
        letterCounts[char]++;
      } else {
        letterCounts[char] = 1;
      }
    }
  }
  return letterCounts;
};

module.exports = countLetters;