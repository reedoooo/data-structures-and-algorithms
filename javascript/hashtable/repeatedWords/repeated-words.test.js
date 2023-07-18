const repeatedWord = require('./index');

describe('repeatedWord', () => {
  it('should return the first repeated word in the string', () => {
    const input = 'Once upon a time, there was a brave princess who...';
    const expectedOutput = 'a';
    expect(repeatedWord(input)).toEqual(expectedOutput);
  });

  it('should return the first repeated word in a string with multiple repeated words', () => {
    const input = 'It was the best of times, it was the worst of times, it was the age of wisdom...';
    const expectedOutput = 'it';
    expect(repeatedWord(input)).toEqual(expectedOutput);
  });

  it('should return "No repeated words found" for a string with no repeated words', () => {
    const input = 'There is no repeated word in this string.';
    const expectedOutput = 'No repeated words found';
    expect(repeatedWord(input)).toEqual(expectedOutput);
  });

  it('should ignore punctuation and return the first repeated word', () => {
    const input = 'Hello, hello! How are you? Are you doing well?';
    const expectedOutput = 'hello';
    expect(repeatedWord(input)).toEqual(expectedOutput);
  });

  it('should return the first repeated word even if it has different capitalization', () => {
    const input = 'The quick brown fox jumps over the lazy dog. The Quick brown Fox jumps over the Lazy dog.';
    const expectedOutput = 'the';
    expect(repeatedWord(input)).toEqual(expectedOutput);
  });

  it('should return "No repeated words found" for an empty string', () => {
    const input = '';
    const expectedOutput = 'No repeated words found';
    expect(repeatedWord(input)).toEqual(expectedOutput);
  });

  it('throws error when input is not a string', () => {
    expect(() => repeatedWord(true)).toThrow('Input must be a string');
    expect(() => repeatedWord(0)).toThrow('Input must be a string');
    expect(() => repeatedWord(-1)).toThrow('Input must be a string');
    expect(() => repeatedWord(null)).toThrow('Input must be a string');
    expect(() => repeatedWord(undefined)).toThrow('Input must be a string');
    expect(() => repeatedWord([])).toThrow('Input must be a string');
    expect(() => repeatedWord({})).toThrow('Input must be a string');
  });
});
