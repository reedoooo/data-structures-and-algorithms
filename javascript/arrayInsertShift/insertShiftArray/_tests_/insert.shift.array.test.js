'use strict';
const insertShiftArray = require('../insert-shift-array.js');

describe('insertShiftArray', () => {
  it('should add a value in the middle of an array', () => {
    const array = [1, 2, 3, 4];
    const value = 5;
    const result = insertShiftArray(array, value);
    expect(result).toEqual([1, 2, 5, 3, 4]);
  });

  it('should add a value in the middle of an array with odd length', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 6;
    const result = insertShiftArray(array, value);
    expect(result).toEqual([1, 2, 3, 6, 4, 5]);
  });

  it('should add a value to an empty array', () => {
    const array = [];
    const value = 1;
    const result = insertShiftArray(array, value);
    expect(result).toEqual([1]);
  });
});
