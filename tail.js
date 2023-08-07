const assertEqual = require('./assertEqual');

  // Tail Function
const tail = function(array) {
    if (array.length <= 1) {
      return []; // Return an empty array for arrays with one or zero elements
    } else {
      return array.slice(1); // Return a new array starting from the second element
    }
  };
  
  module.exports = tail;
  