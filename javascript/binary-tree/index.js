class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  find_maximum_value() {
    return this._find_maximum_value(
      this.root,
      this.root ? this.root.value : null
    );
  }

  _find_maximum_value(node, max) {
    if (node === null) {
      return max;
    }

    if (node.value > max) {
      max = node.value;
    }

    max = this._find_maximum_value(node.left, max);
    max = this._find_maximum_value(node.right, max);

    return max;
  }
}

module.exports = { BinaryTree, Node };
