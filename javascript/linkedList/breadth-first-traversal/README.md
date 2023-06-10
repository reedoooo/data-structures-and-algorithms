# Code Challenge: Breadth-First Traversal of Binary Tree

## Whiteboard Process

![Tree Whiteboard](./Breadth-first%20Traversal.jpeg)

## Approach & Efficiency

The breadth-first traversal algorithm is implemented for the binary tree data structure. This approach visits nodes in a tree in a level-by-level manner, starting from the root node, visiting nodes at depth 1, then depth 2, and so on until all nodes are visited. The data structure used to aid this traversal is a queue. Nodes are dequeued, visited, and their children are enqueued.

Time complexity for the traversal is O(n) where n is the number of nodes in the tree as every node needs to be visited once. The space complexity is also O(n) as in the worst case (a perfect binary tree) all nodes at the last level have to be stored in the queue.

## Code

The `BinaryTree` class and the `Node` class are defined in the [index.js](./index.js) file. The `breadthFirst` function implements the algorithm described above.

```javascript
function breadthFirst(tree) {
  if (tree.root === null) {
    return [];
  }
  let result = [];
  let queue = [tree.root];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}
module.exports = { breadthFirst };
```
