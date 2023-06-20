const { InsertionSort } = require('./index');

describe('Insertion Sort', () => {
  test('Standard Input', () => {
    const array = [4, 2, 8, 5, 1, 3];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 8]);
  });

  test('Different Output', () => {
    const array = [7, 2, 5, 1, 9, 3];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 5, 7, 9]);
  });

  test('Already Sorted Array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Array with Duplicate Values', () => {
    const array = [4, 2, 8, 5, 1, 3, 4, 5];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 4, 5, 5, 8]);
  });

  test('Empty Array', () => {
    const array = [];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([]);
  });

  test('Array with a Single Element', () => {
    const array = [9];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([9]);
  });

  test('Negative Values', () => {
    const array = [-3, -8, -1, -5, -4];
    const sortedArray = InsertionSort(array);
    expect(sortedArray).toEqual([-8, -5, -4, -3, -1]);
  });
});
