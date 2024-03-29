const { treeIntersection } = require('..');
const { BinaryTree, Node } = require('../../binary-tree-manipulation/index');

describe('treeIntersection', () => {
  it('returns an array of common values between two binary trees', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);
    tree1.root.left.left = new Node(4);
    tree1.root.left.right = new Node(5);

    const tree2 = new BinaryTree();
    tree2.root = new Node(2);
    tree2.root.left = new Node(4);
    tree2.root.right = new Node(6);
    tree2.root.left.left = new Node(8);
    tree2.root.left.right = new Node(5);

    expect(treeIntersection(tree1, tree2)).toEqual([2, 4, 5]);
  });

  it('returns an empty array when there are no common values', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);

    const tree2 = new BinaryTree();
    tree2.root = new Node(4);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(6);

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('returns an empty array when both binary trees are empty', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('returns an array of common values when binary trees have null nodes', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(null);
    tree1.root.right = new Node(3);

    const tree2 = new BinaryTree();
    tree2.root = new Node(2);
    tree2.root.left = new Node(null);
    tree2.root.right = new Node(6);

    expect(treeIntersection(tree1, tree2)).toEqual([null]);
  });
});
