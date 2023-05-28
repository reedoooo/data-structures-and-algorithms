'use strict'

const binarySearch = require('./binarySearchArray');

describe('Does binary search algorithm work correctly?', () => {

  test('binary search works on an array of even length', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5 )).toEqual(4)
  })

  test('binary search works on an array of odd length', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4 )).toEqual(3)
  })

  test('binary search works when searchKey is right in the middle of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3 )).toEqual(2)
  })

  test('binary search works when searchKey is to the left of the initial middle idx', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2 )).toEqual(1)
  })

  test('binary search works when searchKey is to the right of the initial middle idx', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7 )).toEqual(6)
  })

  test('binary search works when searchKey is the first thing in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5 )).toEqual(4)
  })

  test('binary search works when searchKey is the last thing in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5 )).toEqual(4)
  })

  test('binary search returns -1 if the searchKey is not found in the sortedArr', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 10 )).toEqual(-1)
  })

  test('throws an error if the first argument IS NOT an array', () => {
    expect(() => binarySearch('[1, 2, 3, 4, 5]', 10 )).toThrow(Error)
  })

})