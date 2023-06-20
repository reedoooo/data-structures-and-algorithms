const { MergeSort } = require(".");

describe('Merge Sort', () => {
  it('should sort the array in ascending order', () => {
    const array = [5, 2, 8, 4, 1, 9, 3, 7, 6];
    MergeSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle an empty array', () => {
    const array = [];
    MergeSort(array);
    expect(array).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const array = [42];
    MergeSort(array);
    expect(array).toEqual([42]);
  });

  it('should handle an array with duplicate elements', () => {
    const array = [5, 2, 8, 4, 1, 9, 3, 7, 6, 4, 1, 5];
    MergeSort(array);
    expect(array).toEqual([1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9]);
  });

  it('should handle a large array', () => {
    const array = [];
    for (let i = 1000; i > 0; i--) {
      array.push(i);
    }
    MergeSort(array);
    const sortedArray = [];
    for (let i = 1; i <= 1000; i++) {
      sortedArray.push(i);
    }
    expect(array).toEqual(sortedArray);
  });
});
