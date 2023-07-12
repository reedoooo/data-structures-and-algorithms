// Define a class 'Node' to represent each node in the binary tree
class Node {
  // A constructor is a special function that gets called when an instance of the class is created
  constructor(value) {
    // Assign the passed value to this node
    this.value = value;

    // Assign null to the left child of this node (initially there are no children)
    this.left = null;

    // Assign null to the right child of this node (initially there are no children)
    this.right = null;
  }
}

// Define a class 'BinaryTree' to represent a binary tree
class BinaryTree {
  // The constructor of BinaryTree accepts an optional parameter 'root'
  // If no root is provided during the creation of BinaryTree instance, it defaults to null
  constructor(root = null) {
    // Set the root of the tree
    this.root = root;
  }

  // Method to find the maximum value in the binary tree
  // It calls a helper method _find_maximum_value which does the actual work
  find_maximum_value() {
    // Call the helper method starting from the root of the tree
    // If the tree has a root, use its value as the initial maximum value
    // Otherwise, use null as the initial maximum value
    return this._find_maximum_value(
      this.root,
      this.root ? this.root.value : null
    );
  }

  // Define a helper method to find the maximum value in the binary tree
  // This method takes a node and the current maximum value as parameters
  _find_maximum_value(node, max) {
    // If the node is null, we've reached a leaf node and the search is over
    // In this case, return the maximum value found so far
    if (node === null) {
      return max;
    }

    // If the current node's value is greater than the maximum found so far,
    // update the maximum
    if (node.value > max) {
      max = node.value;
    }

    // Recursively call the function for the left subtree of the current node
    // The function returns the maximum value found in the left subtree,
    // so assign it to max
    max = this._find_maximum_value(node.left, max);

    // Do the same for the right subtree of the current node
    max = this._find_maximum_value(node.right, max);

    // After visiting all nodes in the tree, return the maximum value
    return max;
  }
}

// Export the classes so they can be used in other modules
module.exports = { BinaryTree, Node };
