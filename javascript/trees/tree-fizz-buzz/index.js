class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzTree(originalTree) {
  if (!originalTree) return null;

  let newTree = new KaryTree();
  newTree.root = copyTreeStructure(originalTree.root);

  function traverse(nodeOriginal, nodeNew) {
    if (nodeOriginal.value % 3 === 0 && nodeOriginal.value % 5 === 0)
      nodeNew.value = "FizzBuzz";
    else if (nodeOriginal.value % 3 === 0) nodeNew.value = "Fizz";
    else if (nodeOriginal.value % 5 === 0) nodeNew.value = "Buzz";
    else nodeNew.value = String(nodeOriginal.value);

    for (let i = 0; i < nodeOriginal.children.length; i++)
      traverse(nodeOriginal.children[i], nodeNew.children[i]);
  }

  traverse(originalTree.root, newTree.root);

  return newTree;
}

function copyTreeStructure(node) {
  if (!node) return null;
  return new Node(node.value, [...node.children].map(copyTreeStructure));
}

module.exports = { Node, KaryTree, fizzBuzzTree };
