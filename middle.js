const middle = function (arr) {
  const length = arr.length;
  if (length <= 2) {
    return []; // Return an empty array for arrays with one or two elements
  } else if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [arr[middleIndex]]; // Return a single middle element for arrays with odd length
  } else {
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [arr[middleIndex1], arr[middleIndex2]]; // Return two middle elements for arrays with even length
  }
};

module.exports = middle;
