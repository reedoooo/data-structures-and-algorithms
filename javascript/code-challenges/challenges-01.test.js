'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  let result = [];
  arr.forEach(num => {
    result.push(num + 1);
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {
  let result = [];
  arr.forEach(str => {
    result.push(str + '!');
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {
  let result = [];
  arr.forEach(str => {
    result.push(str.toUpperCase());
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
------------------------------------------------------------------------------------------------ */

const greeting = (word) => {
  return word.toUpperCase() + '!';
};

const speaker = (words, callback) => {
  let result = [];
  words.forEach(word => {
    result.push(callback(word));
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  let result = [];
  availableItems.forEach(item => {
    if (item.available) {
      result.push(item.name);
    }
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  let result = [];
  arr.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push('Fizz Buzz');
    } else if (num % 3 === 0) {
      result.push('Fizz');
    } else if (num % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(num);
    }
  });
  return result;
};


describe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

describe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
