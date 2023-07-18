'use strict'; // Enforces strict mode in JavaScript, which makes error-checking more robust

// Declare a function named binarySearch which takes a sorted array and a search key as arguments
const binarySearch = (sortedArr, searchKey) => {

  // Declare a variable to keep track of the left boundary of the search space
  let leftBound = 0;

  // Declare a variable to keep track of the right boundary of the search space, which is initially the last index in the array
  let rightBound = sortedArr.length - 1;

  // Declare a variable to store the index of the middle element
  let middleIdx;

  // If the first argument is not an array, throw an error
  if (!Array.isArray(sortedArr)) {
    throw new Error('Invalid argument, first argument must be an array');
  }

  // While the search space is not empty
  while (leftBound <= rightBound) {

    // Calculate the index of the middle element
    middleIdx = Math.floor((leftBound + rightBound) / 2);

    // If the middle element is less than the search key, update the left boundary to exclude the left half of the current search space
    if (sortedArr[middleIdx] < searchKey) {
      leftBound = middleIdx + 1;
    }
    // If the middle element is more than the search key, update the right boundary to exclude the right half of the current search space
    else if (sortedArr[middleIdx] > searchKey) {
      rightBound = middleIdx - 1;
    }
    // If the middle element is equal to the search key, return the index of the middle element
    else return middleIdx;
  }

  // If the search key was not found in the array, return -1
  return -1;
};

// Export the binarySearch function to be able to use it in other modules
module.exports = binarySearch;
