function mostCommonWord(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  string = string.toLowerCase();
  let words = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
  let wordCounts = {};

  for (let word of words) {
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  let maxCount = 0;
  let maxWord = '';

  for (let word in wordCounts) {
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      maxWord = word;
    }
  }

  return maxWord;
}

module.exports = { mostCommonWord };
