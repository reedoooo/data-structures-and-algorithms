const { fizzBuzzTree, Node, KaryTree } = require('./index');
// const Node = require('./node');

function testFizzBuzzTree() {
  // Test case 1
  let tree1 = new KaryTree(new Node(15, [new Node(3), new Node(5), new Node(10)]));
  console.log(JSON.stringify(fizzBuzzTree(tree1)));

  // Test case 2
  let tree2 = new KaryTree(new Node(15));
  console.log(JSON.stringify(fizzBuzzTree(tree2)));

  // Test case 3
  let tree3 = new KaryTree(new Node(1, [new Node(2), new Node(4), new Node(7)]));
  console.log(JSON.stringify(fizzBuzzTree(tree3)));

  // Test case 4: null input
  let tree4 = null;
  console.log(fizzBuzzTree(tree4) === null);
}

testFizzBuzzTree();
