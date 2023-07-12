'use strict'; // Enforces strict mode in JavaScript, which makes error-checking more robust

// Declare a function named binarySearch which takes a sorted array and a search key as arguments
function binarySearch(array, searchKey) {

  // Declare a variable to keep track of the start index of the search space
  let start = 0;

  // Declare a variable to keep track of the end index of the search space, which is initially the last index in the array
  let end = array.length - 1;

  // While the search space is not empty
  while (start <= end) {

    // Calculate the index of the middle element
    let mid = Math.floor((start + end) / 2);

    // If the middle element is equal to the search key, return the index of the middle element
    if (array[mid] === searchKey) {
      return mid;
    }
    // If the middle element is less than the search key, update the start index to exclude the left half of the current search space
    else if (array[mid] < searchKey) {
      start = mid + 1;
    }
    // If the middle element is more than the search key, update the end index to exclude the right half of the current search space
    else {
      end = mid - 1;
    }
  }

  // If the search key was not found in the array, return -1
  return -1;
}

// Export the binarySearch function to be able to use it in other modules
module.exports = binarySearch;
