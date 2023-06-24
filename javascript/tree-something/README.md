
# Coding Challenge 30: tree-something

## Problem Domain

The task here is to find the sum of all the odd numbers in a binary search tree. Binary search tree traversal can be used to solve this problem, and both depth-first and breadth-first traversals are acceptable approaches.

## Visual

     4

/ \
 2 5
/ \ / \
1 3 6 7

## Approach and Efficiency

- **Approach:**

  - Initialize a variable 'sum' to 0. This will be used to keep track of the sum of the odd numbers.
  - Start a traversal of the tree (either depth-first or breadth-first).
  - For each node, check if the value is odd.
  - If the value is odd, add it to the 'sum'.
  - Continue until all nodes have been visited.
  - Return the 'sum' as the result.

- **Efficiency:**
  - Took me about half an hour

## Code

[Link to Code](./index.js)

## UML

[Link to UML](./tree-something.jpeg)
