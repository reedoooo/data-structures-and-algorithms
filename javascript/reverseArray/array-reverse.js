'use strict';

function reverseArr(arr) {
  let arr2 = [];
  for(let i = 0; i <= arr.length; i++){
    arr2.push(arr[arr.length - i]);
  }
  return arr2;
}

let x = [1,2,3,4,5];
reverseArr(x);

