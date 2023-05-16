const { expect } = require('chai');

describe('reverseArr', () => {
  it('should reverse the order of elements in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [5, 4, 3, 2, 1];
    const result = reverseArr(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return an empty array if the input array is empty', () => {
    const input = [];
    const expectedOutput = [];
    const result = reverseArr(input);
    expect(result).to.deep.equal(expectedOutput);
  });
});
