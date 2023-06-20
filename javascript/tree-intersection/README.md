# Code Challenge: tree-intersections

## [treeIntersection.js](./index.js)

Write a function called `treeIntersection` that takes two binary trees as parameters. Find common values in 2 binary trees using a HashTable as part of the algorithm.

### Problem Domain

Write a function called `treeIntersection` that takes two binary trees as parameters. The function should find common values between the two trees and return an array of duplicate values.

### Whiteboard Process

**Tree Intersection Whiteboard**
![Tree Intersection Whiteboard](./tree-intersection.JPG)

### Approach and Efficiency

- **Approach:**
  - The approach is to utilize pre-order traversal on each binary tree to obtain an array of values for both trees.
  - We then use a HashTable to store the values as keys. Duplicate values will hash to the same bucket, allowing us to identify common values.
  - Iterate through the buckets of the HashTable and check if each bucket has a linked list. If it does, traverse the linked list to find duplicate values and add them to the result array.

- **Efficiency:**
  - Time complexity: O(n * x), where n is the length of `HashTable.buckets` and x is the length of the linked list within any given bucket.
  - Space complexity: O(n), where n is the length of the array of duplicate values.

### Solution

```javascript
const treeIntersection = (treeA, treeB) => {
  let treeAValues = treeA.preOrder(treeA.root);
  let treeBValues = treeB.preOrder(treeB.root);

  let myHashTable = new HashTable(1234);

  treeAValues.forEach(value => {
    myHashTable.set(value, value);
  });

  treeBValues.forEach(value => {
    myHashTable.set(value, value);
  });

  let duplicates = [];

  myHashTable.buckets.forEach(bucket => {
    if (bucket) {
      let currentNode = bucket.head.next;
      while (currentNode) {
        if (
          JSON.stringify(bucket.head.value) ===
          JSON.stringify(currentNode.value)
        ) {
          duplicates.push(Object.values(bucket.head.value)[0]);
          break;
        } else currentNode = currentNode.next;
      }
    }
  });

  return duplicates;
};
