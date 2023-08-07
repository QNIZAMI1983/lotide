const tail = require('../tail');


  // TEST CASES
  const testArray1 = ["Hello", "Lighthouse", "Labs"];
  const result1 = tail(testArray1);
  console.log(result1); // prints ["Lighthouse", "Labs"]
  
  const testArray2 = [1, 2, 3];
  const result2 = tail(testArray2);
  console.log(result2); // prints [2, 3]