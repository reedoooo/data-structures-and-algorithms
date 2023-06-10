const { breadthFirst } = require('./index');
const Node = require('./node');

describe('Breadth-First Traversal Tests', () => {
  test('It should return a list of all values in breadth-first order', () => {
    const tree = {
      root: new Node(2,
        new Node(7,
          new Node(2),
          new Node(6,
            new Node(5),
            new Node(11)
          )
        ),
        new Node(5,
          null,
          new Node(9,
            new Node(4),
            null
          )
        )
      )
    };

    expect(breadthFirst(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  test('It should return an empty list for an empty tree', () => {
    const tree = {
      root: null
    };
    expect(breadthFirst(tree)).toEqual([]);
  });

  test('It should return a list with one value for a tree with a single node', () => {
    const tree = {
      root: new Node(1)
    };
    expect(breadthFirst(tree)).toEqual([1]);
  });
});
