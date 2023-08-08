const countOnly = function (allItems, itemsToCount) {
  const counts = {};

  for (const item of allItems) {
    if (itemsToCount[item] && itemsToCount[item] === true) {
      if (counts[item]) {
        counts[item] += 1;
      } else {
        counts[item] = 1;
      }
    }
  }

  return counts;
};

module.exports = countOnly;