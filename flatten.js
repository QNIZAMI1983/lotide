const flatten = function(arr) {
  return arr.reduce((result, current) => {
    if (Array.isArray(current)) {
      return result.concat(flatten(current));  // Recursive call if current item is an array
    } else {
      return result.concat(current);
    }
  }, []);
};

module.exports = flatten;
