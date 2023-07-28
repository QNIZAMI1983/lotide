const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; // Return false if arrays have different lengths
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false; // Return false if elements don't match
      }
    }
  
    return true; // Return true if all elements match
  };
  
  const letterPositions = function(sentence) {
    const results = {};
    
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      
      // check if the character is a letter, ignore spaces and other characters
      if (/[a-zA-Z]/.test(char)) {
        // convert the letter to uppercase to make sure both uppercase and lowercase letters are counted together
        const letter = char.toUpperCase();
        
        // if the letter is already a key in the results object, push the current index to its array
        if (results[letter]) {
          results[letter].push(i);
        } else {
          // if the letter is not a key in the results object, initialize its array with the current index
          results[letter] = [i];
        }
      }
    }
    
    return results;
  };
  