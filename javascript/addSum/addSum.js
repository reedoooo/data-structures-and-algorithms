'use strict';

function rowSums(matrix) {
  let result = [];
  for (let row of matrix) {
    let sum = 0;
    for (let num of row) {
      sum += num;
    }
    result.push(sum);
  }
  return result;
}


export default rowSums;

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
