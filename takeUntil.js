const takeUntil = function (array, callback) {
    const results = [];
    for (let item of array) {
        if (callback(item)) {
            // If the callback returns a truthy value, stop collecting items and return the results
            return results;
        }
        results.push(item);
    }
    // If the callback never returned a truthy value, return the entire array
    return array;
};

module.exports = takeUntil;
