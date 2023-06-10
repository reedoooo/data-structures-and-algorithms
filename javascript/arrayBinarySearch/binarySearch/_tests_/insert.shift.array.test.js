const binarySearch = require('../binarySearch');

describe('binarySearch', () => {
  test('should return the correct index for the search key', () => {
    const array = [2, 5, 8, 12, 16, 23, 38, 42];
    const searchKey = 16;

    expect(binarySearch(array, searchKey)).toBe(4);
  });

  test('should return -1 if the search key is not found', () => {
    const array = [2, 5, 8, 12, 16, 23, 38, 42];
    const searchKey = 9;

    expect(binarySearch(array, searchKey)).toBe(-1);
  });

  test('should return -1 for an empty array', () => {
    const array = [];
    const searchKey = 7;

    expect(binarySearch(array, searchKey)).toBe(-1);
  });

  // Add more test cases to cover different scenarios and edge cases
});
