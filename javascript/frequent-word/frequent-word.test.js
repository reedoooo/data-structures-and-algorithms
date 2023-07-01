const { mostCommonWord } = require('./index'); // Path to your file

describe('mostCommonWord', () => {
  test('returns the most common word in a sentence', () => {
    expect(mostCommonWord('In a galaxy far far away')).toBe('far');
    expect(mostCommonWord('Taco cat ate a taco')).toBe('taco');
  });

  test('returns the most common word in a sentence with punctuation', () => {
    expect(mostCommonWord('No. Try not. Do or do not. There is no try.')).toBe(
      'no'
    );
  });

  test('returns the same word if string has only one word', () => {
    expect(mostCommonWord('Hello')).toBe('hello');
  });

  test('returns the first most common word when multiple words have the same frequency', () => {
    expect(mostCommonWord('dog cat bird dog cat bird')).toBe('dog');
  });

  test('returns an empty string if input string is empty', () => {
    expect(mostCommonWord('')).toBe('');
  });

  test('throws error when input is null, zero or negative', () => {
    expect(() => mostCommonWord(null)).toThrow();
    expect(() => mostCommonWord(0)).toThrow();
    expect(() => mostCommonWord(-1)).toThrow();
  });
});
