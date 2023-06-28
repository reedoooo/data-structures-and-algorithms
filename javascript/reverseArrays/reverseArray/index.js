'use strict';

// Here we use a function expression to define the function
const reverseArr = (arr) => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[arr.length - 1 - i]);
  }
  return arr2;
};

module.exports = { reverseArr };
