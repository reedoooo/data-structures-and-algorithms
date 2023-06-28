# Data Structures and Algorithms

This project is written in JavaScript.

## Project Setup Instructions

Below you will find instructions on setting up different types of assignments for Data Structures & Algorithms (DS&A).

### New Data Structure Implementation

1. Create a new folder under the `javascript` directory with the name of the data structure (e.g., `linkedList`).
2. Create a new file called `index.js` in this folder, where you'll implement your data structure as an ES6 Class.

    ```javascript
    class LinkedList {
      constructor() {
        // code
      }

      methodName() {
        // code
      }
    }

    module.exports = LinkedList;
    ```

3. Create a test folder named `__tests__` within your data structure's folder, and create a test file called `[data-structure].test.js` (e.g., `__tests__/linkedList.test.js`).

### Extending a Data Structure

1. Create a new method within the existing data structure class that solves the code challenge.
2. Modify the existing test file (`[data-structure].test.js`) within the `__tests__` folder to cover your new method(s).

### Code Challenge / Algorithm

1. Create a new folder under the `javascript` directory with the name of the code challenge.
2. Write your code challenge implementation in a new file named after the challenge in `kebab-case` (e.g., `find-maximum-value.js`).
3. Create a test folder named `__tests__` within your code challenge's folder, and create a test file called `[challenge].test.js` (e.g., `__tests__/find-maximum-value.test.js`).

## Running Tests

- Run all tests: `npm test`
- Run a specific data structure's tests: `npm test [data-structure]`
- Run a specific challenge's tests: `npm test [challenge-name]`

GitHub will automatically run your tests when you push to your repo.

## 401 Code Challenges

### Arrays

- [Reverse Arrays](./reverseArrays/reverseArray/README.md)
  <!-- An algorithm to reverse an array in place -->

- [Insert Shift Array](./arrayInsertShift/insertShiftArray/README.md)
  <!-- A challenge that deals with inserting an element into the middle of an array -->

- [Binary Search Array](./arrayBinarySearch/array-binary-search/README.md)
  <!-- A challenge that implements the binary search algorithm to find an element in a sorted array -->

### Linked Lists

- [Linked Lists](./linkedList/linked-list/README.md)
  <!-- This covers the implementation of the Linked List data structure -->

- [Zip Lists](./linkedList/linked-list-zip/README.md)
  <!-- A challenge that deals with merging two linked lists by alternating nodes -->

- [Stacks](./linkedList/reading-and-queue/README.md)
  <!-- This covers the implementation of the Stack data structure -->

- [Queues](./linkedList/)
  <!-- This covers the implementation of the Queue data structure -->

- [pseudoQueues](./linkedList/stack-queue-pseudo/README.md)
  <!-- A challenge that implements a queue using two stacks -->

- [Animal Shelter](./linkedList/animal-shelter/README.md)
  <!-- A code challenge that simulates an animal shelter queue system -->

- [Bracket Validator](./linkedList/bracket-validation/README.md)
  <!-- A challenge that validates the proper pairing and nesting of brackets in a string -->

### Trees

- [Binary Trees & Binary Search Trees](./trees/tree/README.md)
  <!-- This covers the implementation of Binary Trees and Binary Search Trees data structures -->

- [Breadth First Traversal on Binary Tree](./trees/breadth-first-traversal/README.md)
  <!-- A challenge that implements the Breadth-First Traversal on a binary tree -->

- [FizzBuzz on a K-Ary Tree](./trees/tree-fizz-buzz/README.md)
  <!-- A challenge that modifies a K-Ary tree with FizzBuzz logic -->

### Sorting Algorithms & Hash Tables

- [InsertionSort](./sorting/insertion/README.md)
  <!-- This covers the implementation of the Insertion Sort algorithm -->

- [MergeSort](./sorting/merge/README.md)
  <!-- This covers the implementation of the Merge Sort algorithm -->

- [HashTables](./hashtable/README.md)
  <!-- This covers the implementation of the Hash Table data structure -->

- [Repeated Word in HashTables](./hashtable/repeatedWords/README.md)
  <!-- A challenge that finds the first repeated word in a string using Hash Tables -->

- [Tree Intersection](./tree-intersection/README.md)
  <!-- A challenge that finds common nodes between two binary trees -->

- [HashTables - Left Join](./leftjoin/README.md)
  <!-- A challenge that performs a left join on two hash tables -->

### Graphs

- [Directed Graph, Adjacency List](./graph/README.md)
  <!-- This covers the implementation of a Directed Graph data structure using Adjacency List -->

- [Breadth First Traversal](./graph/README.md)
  <!-- A challenge that implements the Breadth-First Traversal on a graph -->

- [Business Trip](./graph/businessTrip/README.md)
  <!-- A challenge that calculates the total cost of a trip in a weighted graph -->

- [Depth First Traversal (preOrder)](./graph/README.md)
  <!-- A challenge that implements the Depth-First Traversal (preOrder) on a graph -->
