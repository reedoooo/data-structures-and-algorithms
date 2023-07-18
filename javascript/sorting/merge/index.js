// Merge is a helper function used in the MergeSort function.
// It merges two sorted arrays, left and right, into a single sorted array, arr.
const Merge = (left, right, arr) => {
  // These variables i, j, and k are used as pointers to track our progress through the arrays.
  let i = 0; // Tracks the current index of the left array
  let j = 0; // Tracks the current index of the right array
  let k = 0; // Tracks the current index of the main array (arr)

  // We iterate through the left and right arrays
  // This loop continues until we reach the end of either the left or right array
  while (i < left.length && j < right.length) {
    // If the current element of the left array is less than or equal to the current element of the right array,
    // we put it into the main array
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      // If the current element of the right array is less than the current element of the left array,
      // we put it into the main array
      arr[k] = right[j];
      j++;
    }
    // Increment the pointer of the main array
    k++;
  }

  // After the first while loop, if we've reached the end of the left array but still have elements in the right array,
  // we just append all the remaining elements of the right array to the main array
  if (i === left.length) {
    for (; j < right.length; j++) {
      arr[k] = right[j];
      k++;
    }
  } else {
    // If we've reached the end of the right array but still have elements in the left array,
    // we append all the remaining elements of the left array to the main array
    for (; i < left.length; i++) {
      arr[k] = left[i];
      k++;
    }
  }
};

// MergeSort function that takes an array, arr, and sorts it using the merge sort algorithm.
const MergeSort = (arr) => {
  let n = arr.length;

  // Base condition, if the array has more than one element then we need to keep splitting
  if (n > 1) {
    let mid = Math.floor(n / 2); // We find the middle point of the current array
    // Split the array into two halves around the middle point
    let left = arr.slice(0, mid); // left contains the first half
    let right = arr.slice(mid); // right contains the second half

    // Recursively call MergeSort on the two halves
    MergeSort(left);
    MergeSort(right);

    // Merge the sorted halves back together
    Merge(left, right, arr);
  }
};

// The functions MergeSort and Merge are exported for use in other modules.
module.exports = {
  MergeSort,
  Merge,
};
