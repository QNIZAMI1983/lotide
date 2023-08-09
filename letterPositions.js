const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (/[a-zA-Z]/.test(char)) {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

