'use strict';

const { HashMap } = require('../hashtable/index');

const joinTables = (left, right) => {
  if (left instanceof HashMap && right instanceof HashMap) {
    let keys = left.keys();
    let result = [];

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let leftValue = left.get(key);
      let rightValue = right.get(key) ? right.get(key) : null;

      result.push({
        [key]: [leftValue[key], rightValue ? rightValue[key] : null],
      });
    }

    return result;
  } else {
    console.error('Inputs must be instances of HashTable for joinTables()');
  }
};

module.exports = {
  joinTables,
};
