// Function for Head
const head = function (array) {
  if (array.length === 0) {
    return undefined; // Empty array should yield undefined as its head
  } else {
    return array[0]; // Return the first item of the array
  }
};

module.exports = head;