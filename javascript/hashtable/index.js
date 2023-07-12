// Use strict mode to avoid common mistakes like using undeclared variables
'use strict';

// Import the LinkedList class from the linked list module
const { LinkedList } = require('../linkedList/linked-list/index.js');

// Define the HashMap class
class HashMap {

  // The constructor takes an integer capacity for the initial size of the HashMap
  constructor(capacity) {

    // Set the capacity of the HashMap
    this.capacity = capacity;

    // Create a new array of the given capacity to store the data
    this.storage = new Array(capacity);

    // Binding the context of `this` to each method in the HashMap class
    // This is to ensure the method has the correct `this` when it is called later
    this.calculateHash = this.calculateHash.bind(this);
    this.insert = this.insert.bind(this);
    this.retrieve = this.retrieve.bind(this);
    this.contains = this.contains.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.set = this.set.bind(this);

    // Initialize the nullKey to undefined. This is used to store a value that is set to the null key
    this.nullKey = undefined;
  }

  // The calculateHash method takes a key and returns a number that corresponds to an index in the storage array
  calculateHash(key) {

    // Convert the key to a string and spread it into an array
    let keyStr = `${key}`;
    let spreadKey = [...keyStr];
    let hashedKeys = [];

    // For each character in the key, convert it to its character code and add it to the hashedKeys array
    spreadKey.forEach((char, idx) => {
      hashedKeys.push(`${keyStr}`.charCodeAt(idx));
    });

    // Reduce the hashedKeys array by multiplying all the values together, then multiply by 599 and mod by the storage length
    return (
      (hashedKeys.reduce((prev, curr) => prev * curr, 1) * 599) %
      this.storage.length
    );
  }

  // The insert method adds a key-value pair to the HashMap
  insert(key, value) {

    // Calculate the hash of the key
    let hash = this.calculateHash(key);

    // If there is no LinkedList at the hashed index, create a new LinkedList
    if (!this.storage[hash]) {
      this.storage[hash] = new LinkedList();
    }

    // Add the key-value pair to the LinkedList at the hashed index
    this.storage[hash].append({ [key]: value });
  }

  // The set method is similar to the insert method but allows null keys and updates values of existing keys
  set(key, value) {

    // If the key is null, store the value in nullKey
    if (key === null) {
      this.nullKey = value;
      return;
    }

    // Calculate the hash of the key
    let hash = this.calculateHash(key);

    // If there is no LinkedList at the hashed index, create a new LinkedList
    if (!this.storage[hash]) {
      this.storage[hash] = new LinkedList();
    }

    // If the key already exists in the LinkedList, update its value
    let currentNode = this.storage[hash].head;
    while (currentNode) {
      if (Object.keys(currentNode.value)[0] === key) {
        currentNode.value[key] = value;
        return;
      }
      currentNode = currentNode.next;
    }

    // If the key doesn't exist in the LinkedList, add the key-value pair to the LinkedList
    this.storage[hash].append({ [key]: value });
  }

  // The contains method checks if a key exists in the HashMap
  contains(key) {

    // If the key is null, return whether a value has been set for the null key
    if (key === null) {
      return this.nullKey !== undefined;
    }

    // Calculate the hash of the key
    let hash = this.calculateHash(key);

    // If there is no LinkedList at the hashed index, return false
    if (!this.storage[hash]) return false;

    // If the key exists in the LinkedList, return true
    let currentNode = this.storage[hash].head;
    while (currentNode) {
      if (currentNode.value[key]) return true;

      if (currentNode.next) currentNode = currentNode.next;
      else return false;
    }
  }

  // The retrieve method returns the value associated with a key in the HashMap
  retrieve(key) {

    // Calculate the hash of the key
    let hash = this.calculateHash(key);

    // If there is no LinkedList at the hashed index, return null
    if (!this.storage[hash]) return null;

    // If the key exists in the LinkedList, return its value
    let currentNode = this.storage[hash].head;
    while (currentNode) {
      if (currentNode.value[key]) return currentNode.value[key]; // Modified this line

      if (currentNode.next) currentNode = currentNode.next;
      else return null;
    }
  }

  // The getKeys method returns all the keys in the HashMap
  getKeys() {

    // Create an empty array to hold the keys
    let keys = [];

    // If a value has been set for the null key, add null to the keys array
    if (this.nullKey !== undefined) {
      keys.push(null);
    }

    // For each LinkedList in the storage array, add its keys to the keys array
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

    // Return the array of keys
    return keys;
  }
}

// Export the HashMap class for use in other modules
module.exports = {
  HashMap,
};
