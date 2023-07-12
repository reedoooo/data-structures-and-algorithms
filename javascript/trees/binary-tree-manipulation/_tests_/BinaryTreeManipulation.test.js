const { BinaryTree, BinarySearchTree, Node } = require('../index'); // Replace './your-file' with the actual path to your code file

describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);
    binaryTree.root.left.left = new Node(4);
    binaryTree.root.left.right = new Node(5);
  });

  test('preOrder should return the correct values', () => {
    const result = binaryTree.preOrder();
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  test('inOrder should return the correct values', () => {
    const result = binaryTree.inOrder();
    expect(result).toEqual([4, 2, 5, 1, 3]);
  });

  test('postOrder should return the correct values', () => {
    const result = binaryTree.postOrder();
    expect(result).toEqual([4, 5, 2, 3, 1]);
  });
});

describe('BinarySearchTree', () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(2);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    binarySearchTree.add(8);
  });

  test('contains should return true for existing values', () => {
    expect(binarySearchTree.contains(5)).toBe(true);
    expect(binarySearchTree.contains(3)).toBe(true);
    expect(binarySearchTree.contains(7)).toBe(true);
    expect(binarySearchTree.contains(2)).toBe(true);
    expect(binarySearchTree.contains(4)).toBe(true);
    expect(binarySearchTree.contains(6)).toBe(true);
    expect(binarySearchTree.contains(8)).toBe(true);
  });

  test('contains should return false for non-existing values', () => {
    expect(binarySearchTree.contains(1)).toBe(false);
    expect(binarySearchTree.contains(9)).toBe(false);
  });
});
