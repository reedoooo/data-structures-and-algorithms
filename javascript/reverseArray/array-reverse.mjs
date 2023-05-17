'use strict';

export function reverseArr(arr) {
  let arr2 = [];
  for(let i = 0; i <= arr.length; i++){
    arr2.push(arr[arr.length - i]);
  }
  return arr2;
}
