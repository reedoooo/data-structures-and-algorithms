// Define a class 'Node' to represent each node in the binary tree or binary search tree
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
  constructor() {
    // Assign null to the root of the tree (initially there are no nodes)
    this.root = null;
  }

  // Define a pre-order traversal method for the tree
  // The default values for the parameters make it possible to call preOrder() without any arguments
  preOrder(node = this.root, values = []) {
    if (node !== null) {
      // Visit the current node
      values.push(node.value);

      // Traverse the left subtree
      this.preOrder(node.left, values);

      // Traverse the right subtree
      this.preOrder(node.right, values);
    }
    // Return the array of values in pre-order traversal
    return values;
  }

  // Define an in-order traversal method for the tree
  inOrder(node = this.root, values = []) {
    if (node !== null) {
      // Traverse the left subtree
      this.inOrder(node.left, values);

      // Visit the current node
      values.push(node.value);

      // Traverse the right subtree
      this.inOrder(node.right, values);
    }
    // Return the array of values in in-order traversal
    return values;
  }

  // Define a post-order traversal method for the tree
  postOrder(node = this.root, values = []) {
    if (node !== null) {
      // Traverse the left subtree
      this.postOrder(node.left, values);

      // Traverse the right subtree
      this.postOrder(node.right, values);

      // Visit the current node
      values.push(node.value);
    }
    // Return the array of values in post-order traversal
    return values;
  }
}

// Define a class 'BinarySearchTree' that extends (inherits from) the BinaryTree class
class BinarySearchTree extends BinaryTree {
  // Define a method to add a value to the binary search tree
  add(value) {
    // If the tree is empty, create a new node and assign it to the root
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      // Otherwise, use the recursive add method to find the correct location
      this.recursiveAdd(this.root, value);
    }
  }

  // Define a recursive helper method to add a value to the binary search tree
  recursiveAdd(node, value) {
    // If the value is less than the node's value, go to the left subtree
    if (value < node.value) {
      // If there's no left child, add the value here
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        // Otherwise, keep looking recursively in the left subtree
        this.recursiveAdd(node.left, value);
      }
    } else {
      // If the value is greater than or equal to the node's value, go to the right subtree
      if (node.right === null) {
        // If there's no right child, add the value here
        node.right = new Node(value);
      } else {
        // Otherwise, keep looking recursively in the right subtree
        this.recursiveAdd(node.right, value);
      }
    }
  }

  // Define a method to check if a value is in the binary search tree
  contains(value) {
    // Use the recursive contains method to find the value
    return this.recursiveContains(this.root, value);
  }

  // Define a recursive helper method to find a value in the binary search tree
  recursiveContains(node, value) {
    // If the node is null (we've reached a leaf), the value is not in the tree
    if (node === null) {
      return false;
    }
    // If the value is equal to the node's value, we've found the value
    if (value === node.value) {
      return true;
    }
    // If the value is less than the node's value, look in the left subtree
    if (value < node.value) {
      return this.recursiveContains(node.left, value);
    } else {
      // If the value is greater than the node's value, look in the right subtree
      return this.recursiveContains(node.right, value);
    }
  }
}

// Export the classes so they can be used in other modules
module.exports = { BinaryTree, BinarySearchTree, Node };
