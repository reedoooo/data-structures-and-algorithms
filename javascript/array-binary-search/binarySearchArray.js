'use strict'

const binarySearch = (sortedArr, searchKey) => {
  let leftBound = 0;
  let rightBound = sortedArr.length - 1;
  let middleIdx;

  if (!Array.isArray(sortedArr)) {
    throw new Error('Invalid argument, first argument must be an array')
  }

  while (leftBound <= rightBound) {
    middleIdx = Math.floor((leftBound + rightBound) / 2);
    if (sortedArr[middleIdx] < searchKey) {
      leftBound = middleIdx + 1;
    } 
    else if (sortedArr[middleIdx] > searchKey) {
      rightBound = middleIdx - 1;
    }
    else return middleIdx;
  }

  return -1;
}

module.exports = binarySearch;