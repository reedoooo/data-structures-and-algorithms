const { Node, BinaryTree } = require('./index.js'); // replace with your actual path

describe('BinaryTree', () => {
  test('should return 0 when the tree is empty', () => {
    let tree = new BinaryTree();
    expect(tree.sumOddNumbers()).toEqual(0);
  });

  test('should return the correct sum when the tree has one node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(3);
    expect(tree.sumOddNumbers()).toEqual(3);
  });

  test('should return 0 when all nodes are even', () => {
    let tree = new BinaryTree();
    let node1 = new Node(2);
    let node2 = new Node(4);
    let node3 = new Node(6);
    node1.left = node2;
    node1.right = node3;
    tree.root = node1;
    expect(tree.sumOddNumbers()).toEqual(0);
  });

  test('should return the correct sum when the tree has both odd and even numbers', () => {
    let tree = new BinaryTree();
    let node1 = new Node(2);
    let node2 = new Node(3);
    let node3 = new Node(4);
    let node4 = new Node(5);
    let node5 = new Node(6);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    tree.root = node1;
    expect(tree.sumOddNumbers()).toEqual(8); // 3 + 5
  });
});
