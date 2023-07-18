const { BinaryTree, Node } = require('../index'); // Assuming your file is named BinaryTree.js

describe('BinaryTree', () => {
  test('find_maximum_value should return the maximum value in the tree', () => {
    let tree = new BinaryTree(new Node(10));
    tree.root.left = new Node(7);
    tree.root.right = new Node(12);
    tree.root.left.left = new Node(6);
    tree.root.left.right = new Node(8);
    tree.root.right.left = new Node(11);
    tree.root.right.right = new Node(14);
    expect(tree.find_maximum_value()).toBe(14);
  });

  test('find_maximum_value should handle negative values', () => {
    let tree = new BinaryTree(new Node(-10));
    tree.root.left = new Node(-20);
    tree.root.right = new Node(-30);
    expect(tree.find_maximum_value()).toBe(-10);
  });

  test('find_maximum_value should handle trees where all nodes have the same value', () => {
    let tree = new BinaryTree(new Node(1));
    tree.root.left = new Node(1);
    tree.root.right = new Node(1);
    expect(tree.find_maximum_value()).toBe(1);
  });

  test('find_maximum_value should return null for an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.find_maximum_value()).toBeNull();
  });
});
