'use strict';

function binarySearch(array, searchKey) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === searchKey) {
          return mid;
      } else if (array[mid] < searchKey) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return -1;
}

export default binarySearch;
