'use strict'; // Enforces strict mode in JavaScript, which can help catch common coding mistakes and "unsafe" actions.

// Define a function named insertShiftArray which takes an array and a number as arguments
function insertShiftArray(arr, num) {

  // Declare a new empty array, arr2
  let arr2 = [];

  // Calculate the middle index of the array. If the array length is odd, round up to the nearest integer.
  let middle = Math.ceil(arr.length / 2);

  // Loop over the original array
  for (let i = 0; i < arr.length; i++) {
    // If the current index is the calculated middle index, add the given number to arr2
    if (i === middle) {
      arr2.push(num);
    }
    // Add the current element of the original array to arr2
    arr2.push(arr[i]);
  }

  // If the length of the original array is even, and the number has not been added to arr2 (as indicated by arr2's length being the same as arr's), add the number to the end of arr2
  if (arr.length % 2 === 0 && arr2.length === arr.length) {
    arr2.push(num);
  }

  // Return the modified array
  return arr2;
}

// Export the insertShiftArray function so it can be used in other modules
module.exports = insertShiftArray;
