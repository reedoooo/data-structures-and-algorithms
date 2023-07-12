'use strict';

const { LinkedList } = require('../linkedList/linked-list/index.js');

class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = new Array(capacity);
    this.calculateHash = this.calculateHash.bind(this);
    this.insert = this.insert.bind(this);
    this.retrieve = this.retrieve.bind(this);
    this.contains = this.contains.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.set = this.set.bind(this);
  }

  calculateHash(key) {
    let keyStr = `${key}`;
    let spreadKey = [...keyStr];
    let hashedKeys = [];

    spreadKey.forEach((char, idx) => {
      hashedKeys.push(`${keyStr}`.charCodeAt(idx));
    });

    return (
      (hashedKeys.reduce((prev, curr) => prev * curr, 1) * 599) %
      this.storage.length
    );
  }

  insert(key, value) {
    let hash = this.calculateHash(key);

    if (!this.storage[hash]) {
      this.storage[hash] = new LinkedList();
    }
    this.storage[hash].append({ [key]: value });
  }

  set(key, value) {
    let hash = this.calculateHash(key);

    if (!this.storage[hash]) {
      this.storage[hash] = new LinkedList();
    }

    let currentNode = this.storage[hash].head;
    while (currentNode) {
      if (Object.keys(currentNode.value)[0] === key) {
        currentNode.value[key] = value;
        return;
      }
      currentNode = currentNode.next;
    }

    this.storage[hash].append({ [key]: value });
  }

  retrieve(key) {
    let hash = this.calculateHash(key);

    if (!this.storage[hash]) return null;

    let currentNode = this.storage[hash].head;
    while (currentNode) {
      if (currentNode.value[key]) return currentNode.value;

      if (currentNode.next) currentNode = currentNode.next;
      else return null;
    }
  }

  contains(key) {
    let hash = this.calculateHash(key);

    if (!this.storage[hash]) return false;

    let currentNode = this.storage[hash].head;
    while (currentNode) {
      if (currentNode.value[key]) return true;

      if (currentNode.next) currentNode = currentNode.next;
      else return false;
    }
  }

  getKeys() {
    let keys = [];

    this.storage.forEach((storageItem) => {
      if (storageItem && storageItem.head) {
        let currentNode = storageItem.head;

        while (currentNode) {
          let keysInNode = Object.keys(currentNode.value);

          keysInNode.forEach((key) => {
            if (!keys.includes(key)) keys.push(key);
          });

          if (currentNode.next) currentNode = currentNode.next;
          else break;
        }
      }
    });

    return keys;
  }
}

module.exports = {
  HashMap,
};
