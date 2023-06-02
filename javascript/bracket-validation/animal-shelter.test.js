const validateBrackets = require('./index.js');

describe('validateBrackets', () => {

  test('Validates strings with valid brackets', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{[]}')).toBe(true);
    expect(validateBrackets('([{}])')).toBe(true);
  });

  test('Invalidates strings with invalid brackets', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('{')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets(']')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
    expect(validateBrackets('([{])')).toBe(false);
  });

  test('Handles strings with no brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('abcd')).toBe(true);
  });
});
