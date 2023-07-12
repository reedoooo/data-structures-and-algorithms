'use strict';
const LinkedList = require('../index');

// Test 1: Standard case with two lists of equal length
let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(2);

let list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(4);

let zippedList = LinkedList.zipLists(list1, list2);

console.log(JSON.stringify(zippedList)); // Should print {1} -> {5} -> {3} -> {9} -> {2} -> {4}

// Test 2: Lists of different lengths
list1 = new LinkedList();
list1.append(1);
list1.append(3);

list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(4);

zippedList = LinkedList.zipLists(list1, list2);

console.log(JSON.stringify(zippedList)); // Should print {1} -> {5} -> {3} -> {9} -> {4}

// Test 3: One list is empty
list1 = new LinkedList();

list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(4);

zippedList = LinkedList.zipLists(list1, list2);

console.log(JSON.stringify(zippedList)); // Should print {5} -> {9} -> {4}

// Test 4: Both lists are empty
list1 = new LinkedList();
list2 = new LinkedList();

zippedList = LinkedList.zipLists(list1, list2);

console.log(JSON.stringify(zippedList)); // Should print {} (an empty list)

// Test 5: One list has a single node
list1 = new LinkedList();
list1.append(1);

list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(4);

zippedList = LinkedList.zipLists(list1, list2);

console.log(JSON.stringify(zippedList)); // Should print {1} -> {5} -> {9} -> {4}

