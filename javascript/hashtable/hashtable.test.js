const { HashMap } = require("./index"); // Replace with the correct file path

// Test case 1: Insert and retrieve a value
const hashmap1 = new HashMap(10);
hashmap1.insert('key1', 'value1');
const retrievedValue1 = hashmap1.retrieve('key1');
console.log(retrievedValue1); // Expected output: 'value1'

// Test case 2: Insert and check contains
const hashmap2 = new HashMap(10);
hashmap2.insert('key2', 'value2');
const containsKey = hashmap2.contains('key2');
console.log(containsKey); // Expected output: true

// Test case 3: Retrieve non-existing key
const hashmap3 = new HashMap(10);
const retrievedValue3 = hashmap3.retrieve('nonExistingKey');
console.log(retrievedValue3); // Expected output: null

// Test case 4: Check contains for non-existing key
const hashmap4 = new HashMap(10);
const containsKey4 = hashmap4.contains('nonExistingKey');
console.log(containsKey4); // Expected output: false

// Test case 5: Insert multiple values with the same hash
const hashmap5 = new HashMap(10);
hashmap5.insert('key3', 'value3');
hashmap5.insert('key13', 'value13');
hashmap5.insert('key23', 'value23');
const retrievedValue5 = hashmap5.retrieve('key3');
console.log(retrievedValue5); // Expected output: 'value3'

// Test case 6: Get all keys from the hashmap
const hashmap6 = new HashMap(10);
hashmap6.insert('key4', 'value4');
hashmap6.insert('key5', 'value5');
hashmap6.insert('key6', 'value6');
const keys6 = hashmap6.getKeys();
console.log(keys6); // Expected output: ['key4', 'key5', 'key6']
