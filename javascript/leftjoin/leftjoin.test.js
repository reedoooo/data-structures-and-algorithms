const { joinTables } = require('./index'); // replace 'your-file-name' with the actual name of your file
const { HashMap } = require('../hashtable/index');
const { expect } = require('@jest/globals');

describe('joinTables', () => {
  it('joins two HashTables correctly', () => {
    let left = new HashMap();
    let right = new HashMap();

    left.set('one', 'First');
    left.set('two', 'Second');
    right.set('one', 'First from Right');
    right.set('three', 'Third from Right');

    let result = joinTables(left, right);
    let expected = [
      { 'one': ['First', 'First from Right'] },
      { 'two': ['Second', null] }
    ];

    expect(result).toEqual(expected);
  });

  it('throws an error when the arguments are not HashTables', () => {
    let left = {};
    let right = [];

    expect(() => joinTables(left, right)).toThrow('Inputs must be instances of HashTable for joinTables()');
  });
});
