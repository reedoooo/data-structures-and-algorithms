class Node {
  // Define a class Node
  constructor(value, children = []) {
    // The constructor takes in a value and an optional array of children
    this.value = value; // Assign the provided value to the Node's value property
    this.children = children; // Assign the provided children (defaulting to an empty array if not provided) to the Node's children property
  }
}

class KaryTree {
  // Define a class KaryTree
  constructor(root = null) {
    // The constructor takes an optional root Node
    this.root = root; // Assign the provided root (defaulting to null if not provided) to the KaryTree's root property
  }
}

function fizzBuzzTree(originalTree) {
  // Define a function fizzBuzzTree that takes an original KaryTree
  if (!originalTree) return null; // If no originalTree was provided, return null

  let newTree = new KaryTree(); // Create a new instance of a KaryTree
  newTree.root = copyTreeStructure(originalTree.root); // Assign the root of the newTree to be a copy of the originalTree's structure

  function traverse(nodeOriginal, nodeNew) {
    // Define a helper function traverse to traverse both the original and the new tree
    if (nodeOriginal.value % 3 === 0 && nodeOriginal.value % 5 === 0)
      // If the original node's value is divisible by both 3 and 5
      nodeNew.value =
        'FizzBuzz'; // Replace the new node's value with "FizzBuzz"
    else if (nodeOriginal.value % 3 === 0)
      // If the original node's value is divisible by 3 only
      nodeNew.value = 'Fizz'; // Replace the new node's value with "Fizz"
    else if (nodeOriginal.value % 5 === 0)
      // If the original node's value is divisible by 5 only
      nodeNew.value = 'Buzz'; // Replace the new node's value with "Buzz"
    // If the original node's value is neither divisible by 3 nor 5
    else nodeNew.value = String(nodeOriginal.value); // Keep the new node's value as the original node's value

    for (
      let i = 0;
      i < nodeOriginal.children.length;
      i++ // For each child of the original node
    )
      traverse(nodeOriginal.children[i], nodeNew.children[i]); // Recursively call traverse on both original node's child and new node's child
  }

  traverse(originalTree.root, newTree.root); // Initiate traversal starting from the roots of the original and new tree

  return newTree; // Return the new KaryTree that's been updated with FizzBuzz logic
}

function copyTreeStructure(node) {
  // Define a helper function copyTreeStructure that takes a Node
  if (!node) return null; // If no Node was provided, return null
  // Create a new Node with the original Node's value and copy of children's structure using map and recursive call to copyTreeStructure
  return new Node(node.value, [...node.children].map(copyTreeStructure));
}

module.exports = { Node, KaryTree, fizzBuzzTree }; // Export Node, KaryTree and fizzBuzzTree for use in other modules
