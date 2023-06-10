class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node = this.root, values = []) {
    if (node !== null) {
      values.push(node.value);
      this.preOrder(node.left, values);
      this.preOrder(node.right, values);
    }
    return values;
  }

  inOrder(node = this.root, values = []) {
    if (node !== null) {
      this.inOrder(node.left, values);
      values.push(node.value);
      this.inOrder(node.right, values);
    }
    return values;
  }

  postOrder(node = this.root, values = []) {
    if (node !== null) {
      this.postOrder(node.left, values);
      this.postOrder(node.right, values);
      values.push(node.value);
    }
    return values;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.recursiveAdd(this.root, value);
    }
  }

  recursiveAdd(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.recursiveAdd(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.recursiveAdd(node.right, value);
      }
    }
  }

  contains(value) {
    return this.recursiveContains(this.root, value);
  }

  recursiveContains(node, value) {
    if (node === null) {
      return false;
    }
    if (value === node.value) {
      return true;
    }
    if (value < node.value) {
      return this.recursiveContains(node.left, value);
    } else {
      return this.recursiveContains(node.right, value);
    }
  }
}

module.exports = { BinaryTree, BinarySearchTree, Node };
