const { Node, KaryTree, fizzBuzzTree } = require('../index'); // adjust the path according to your file structure

describe('Node', () => {
  test('creates a new Node correctly', () => {
    const node = new Node(1);
    expect(node.value).toBe(1);
    expect(node.children).toEqual([]);
  });

  test('creates a new Node with children correctly', () => {
    const child = new Node(2);
    const node = new Node(1, [child]);
    expect(node.value).toBe(1);
    expect(node.children).toEqual([child]);
  });
});

describe('KaryTree', () => {
  test('creates a new KaryTree correctly', () => {
    const tree = new KaryTree();
    expect(tree.root).toBeNull();
  });

  test('creates a new KaryTree with root correctly', () => {
    const root = new Node(1);
    const tree = new KaryTree(root);
    expect(tree.root).toBe(root);
  });
});

describe('fizzBuzzTree', () => {
  test('creates a new fizzBuzzTree correctly', () => {
    const child1 = new Node(3);
    const child2 = new Node(5);
    const child3 = new Node(15);
    const child4 = new Node(2);
    const root = new Node(1, [child1, child2, child3, child4]);
    const tree = new KaryTree(root);

    const fizzBuzzedTree = fizzBuzzTree(tree);

    expect(fizzBuzzedTree.root.value).toBe('1');
    expect(fizzBuzzedTree.root.children[0].value).toBe('Fizz');
    expect(fizzBuzzedTree.root.children[1].value).toBe('Buzz');
    expect(fizzBuzzedTree.root.children[2].value).toBe('FizzBuzz');
    expect(fizzBuzzedTree.root.children[3].value).toBe('2');
  });

  test('returns null for an empty tree', () => {
    const tree = new KaryTree();
    const fizzBuzzedTree = fizzBuzzTree(tree);
    expect(fizzBuzzedTree.root).toBeNull();
  });
});
