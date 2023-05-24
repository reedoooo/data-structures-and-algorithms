'use strict';

function insertShiftArray(arr, num) {
  let arr2 = [];
  let middle = Math.ceil(arr.length / 2);

  for(let i = 0; i < arr.length; i++){
    if(i === middle){
      arr2.push(num);
    }
    arr2.push(arr[i]);
  }

  // If the array length is even, the middle index will be right after the last element,
  // so we need to insert the number at the end of the array.
  if(arr.length % 2 === 0) {
    arr2.push(num);
  }

  return arr2;
}

module.exports = insertShiftArray;
// function insertShiftArray(arr, value) {
//   let arr2 = [];
//   let middle = Math.ceil(arr.length / 2);

//   for(let i = 0; i < arr.length; i++){
//     if(i === middle){
//       arr2.push(value);
//     }
//     arr2.push(arr[i]);
//   }

//   if(arr.length % 2 === 0) {
//     arr2.push(value);
//   }

//   return arr2;
// }
