const flatten = function (arr) {
  return arr.reduce((result, current) => result.concat(current), []);
};

module.exports = flatten;