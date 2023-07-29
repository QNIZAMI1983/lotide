const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const countLetters = function (sentence) {
    // Create an empty object to store the letter counts
    const letterCounts = {};
    // Loop through each character in the sentence
    for (const char of sentence) {
        // check if the chars is a letter, ignore spaces and other numbers
        if (/[a-zA-Z]/.test(char)) {
            //convert the letter   to uppercase to make sure small case and upper case are counted
            const letter = char.toUpperCase();
            if (letterCounts[letter]) {
                //check if the letter already exists in the letterCounts obj
                letterCounts[letter]++;
                // if exits = true, increment the count by 1
            } else {
                // If it doesn't exists,, init its count to 1
                letterCounts[letter] = 1;

            }
        }
    }
    return letterCounts;
};
console.log(countLetters("This is a sentence"));