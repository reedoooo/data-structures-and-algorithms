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

  sumOddNumbers() {
    if (this.root === null)
      return 0;

    let sum = 0;
    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();

      if (node.value % 2 !== 0)
        sum += node.value;

      if (node.left !== null)
        queue.push(node.left);

      if (node.right !== null)
        queue.push(node.right);
    }

    return sum;
  }
}

module.exports = { Node, BinaryTree };
