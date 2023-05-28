# Code Challenge 02 - Binary Search Array
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process
Whiteboard: https://miro.com/app/board/uXjVMW88ZwA=/?share_link_id=400719331291
![whiteboard snapshot](./whiteboard.JPG)

## Approach & Efficiency
I based my approach on the [wikipedia resource for binary searching](https://en.wikipedia.org/wiki/Binary_search_algorithm) and then also included a condition to throw an error in case a non-array was given as an argument.

## Solution
```
const binarySearch = (sortedArr, searchKey) => {
  let leftBound = 0;
  let rightBound = sortedArr.length - 1;
  let middleIdx;

  if (!Array.isArray(sortedArr)) {
    throw new Error('Invalid argument, first argument must be an array')
  }

  while (leftBound <= rightBound) {
    middleIdx = Math.floor((leftBound + rightBound) / 2);
    if (sortedArr[middleIdx] < searchKey) {
      leftBound = middleIdx + 1;
    } 
    else if (sortedArr[middleIdx] > searchKey) {
      rightBound = middleIdx - 1;
    }
    else return middleIdx;
  }

  return -1;
}

```