function repeatedWord(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  class HashTable {
    constructor(size) {
      this.buckets = new Array(size);
    }

    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash;
    }

    set(key, value) {
      let hashValue = this.hash(key);
      let index = hashValue % this.buckets.length;

      if (!this.buckets[index]) {
        this.buckets[index] = {};
      }

      this.buckets[index][key] = value;
    }

    has(key) {
      let hashValue = this.hash(key);
      let index = hashValue % this.buckets.length;

      if (this.buckets[index] && this.buckets[index][key]) {
        return true;
      }
      return false;
    }
  }

  let hashedString = new HashTable(100);
  let cleanString = string.toLowerCase().replace(/[^a-zA-Z ]+/g, '');
  let stringArr = cleanString.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    let word = stringArr[i];
    if (hashedString.has(word)) {
      return word;
    } else {
      hashedString.set(word, 1);
    }
  }

  return "No repeated words found";
}

module.exports = repeatedWord;
