const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    const counts = {}; // Step 1: Create an empty object to store counts
    
    for (const item of allItems) {
      // Step 2: Loop through each element in the allItems array
      if (itemsToCount[item] && itemsToCount[item] === true) {
        // Step 3: Check if the item exists in itemsToCount object and its value is true
        if (counts[item]) {
          // Step 4a: If it exists, increment its count by 1
          counts[item] += 1;
        } else {
          // Step 4b: If it doesn't exist, initialize its count to 1
          counts[item] = 1;
        }
      }
    }
  
    return counts; // Step 5: Return the object containing counts of each item
  };
  
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);