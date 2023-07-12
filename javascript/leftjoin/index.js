'use strict';

const { HashMap } = require('../hashtable/index');

const joinTables = (left, right) => {
  if (!(left instanceof HashMap) || !(right instanceof HashMap)) {
    throw new Error('Inputs must be instances of HashTable for joinTables()');
  }

  let keys = left.getKeys();
  let result = [];

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let leftValue = left.retrieve(key); // Use retrieve instead of getKeys
    let rightValue = right.contains(key) ? right.retrieve(key) : null; // Use contains and retrieve instead of getKeys

    result.push({
      [key]: [leftValue, rightValue],
    });
  }

  return result;
};

module.exports = {
  joinTables,
};
