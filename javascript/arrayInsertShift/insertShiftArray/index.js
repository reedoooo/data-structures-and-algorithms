'use strict';

function insertShiftArray(arr, num) {
  let arr2 = [];
  let middle = Math.ceil(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (i === middle) {
      arr2.push(num);
    }
    arr2.push(arr[i]);
  }

  // If the array length is even and num was not pushed, push it at the end
  if (arr.length % 2 === 0 && arr2.length === arr.length) {
    arr2.push(num);
  }

  return arr2;
}

module.exports = insertShiftArray;
