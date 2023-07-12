// Define a function named 'Insert' that takes an array and a value as arguments.
function Insert(array, value) {
  // Initialize a variable 'i' to 0. It will be used as an index to traverse the array.
  let i = 0;
  // Initialize a variable 'temp' to 0. It will be used to temporarily store the value from the array during the insertion process.
  let temp = 0;

  // Iterate over the array until we find the position where the value is smaller than or equal to the current array value.
  while (value > array[i]) {
    i = i + 1;
  }

  // Once the correct position is found, iterate through the rest of the array
  while (i < array.length) {
    // Keep the current value of array[i] in 'temp'
    temp = array[i];
    // Replace array[i] with the value to be inserted
    array[i] = value;
    // Move the value that was in array[i] (and is now in 'temp') into 'value', to be inserted in the next iteration
    value = temp;
    // Increase the index 'i' by one for the next iteration
    i = i + 1;
  }
  // Insert the last value (that is in 'value') at the end of the array
  array[i] = value;
}

// Define a function named 'InsertionSort' that takes an array as an argument.
function InsertionSort(array) {
  // Create an array 'sorted' with the first element of the input array.
  let sorted = [];
  sorted[0] = array[0];

  // For each subsequent value in the input array
  for (let i = 1; i < array.length; i++) {
    // Use the 'Insert' function to insert the value into the correct position in the 'sorted' array
    Insert(sorted, array[i]);
  }
  // Return the sorted array
  return sorted;
}

// Export the InsertionSort and Insert functions so they can be used in other modules
module.exports = {
  InsertionSort,
  Insert,
};
