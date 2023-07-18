// This function performs a breadth-first search on a binary tree
function breadthFirst(tree) {

  // If the tree is empty (root is null), then return an empty array
  if (tree.root === null) {
    return [];
  }

  // Initialize an array to store the result of the search
  let result = [];

  // Initialize a queue with the root of the tree
  // In a breadth-first search, a queue is used to keep track of the nodes to visit next
  let queue = [tree.root];

  // While there are still nodes in the queue
  while (queue.length > 0) {

    // Remove the first node from the queue
    let node = queue.shift();

    // Add the value of the node to the result array
    result.push(node.value);

    // If the node has a left child, add it to the queue
    if (node.left) {
      queue.push(node.left);
    }

    // If the node has a right child, add it to the queue
    if (node.right) {
      queue.push(node.right);
    }
  }

  // After visiting all nodes, return the result array
  return result;
}

// Export the breadthFirst function so it can be used in other modules
module.exports = { breadthFirst };
