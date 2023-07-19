const maxProduct = require('../index'); // Assume the function is in maxProduct.js

describe('Testing maxProduct function', () => {
  test('Should return the maximum product of three numbers', () => {
    expect(maxProduct([18, 3, 42, 17, 9, 27])).toBe(20412);
    expect(maxProduct([4, 0, -5, 3, -1, -6, 2])).toBe(120);
    expect(maxProduct([-10, -10, 1, 3, 2])).toBe(200);
  });

  test('Should handle edge cases', () => {
    expect(maxProduct([])).toBeNull(); // Assuming the function returns null for empty array
    expect(maxProduct([1, 2])).toBeNull(); // Assuming the function returns null if array length is less than 3
  });

  test('Should handle negative numbers correctly', () => {
    expect(maxProduct([-10, -20, -30, -40, 2])).toBe(24000);
    expect(maxProduct([-1, -2, -3, -4, -5])).toBe(-6);
  });
});
