// Importing the HashMap class from the hashtable module
const { HashMap } = require('../../hashtable/index');

// The function treeIntersection takes two binary trees as arguments and finds the intersection,
// i.e., values that exist in both trees.
const treeIntersection = (treeA, treeB) => {

  // If either tree is empty (root is null), then there are no common values, so return an empty array
  if (!treeA.root || !treeB.root) {
    return [];
  }

  // Get an array of values from the first tree using pre-order traversal (root, left, right)
  let treeAValues = treeA.preOrder(treeA.root);

  // Get an array of values from the second tree using pre-order traversal
  let treeBValues = treeB.preOrder(treeB.root);

  // Create a new HashTable to store the values from the first tree.
  // We give it a size of 1234 but you could choose any number sufficiently large to hold your data.
  let myHashTable = new HashMap(1234);

  // For each value in the first tree, add it to the hash table.
  // Note that duplicate values will be overwritten, but that's okay for this use case.
  treeAValues.forEach((value) => {
    // HashTable's 'set' function is called which takes key-value pair,
    // in this case key and value are the same
    myHashTable.set(value, value);
  });

  // Create an empty array to hold the duplicate values
  let duplicates = [];

  // For each value in the second tree, check if it's in the hash table.
  // If it is, that means it's a duplicate and should be added to the duplicates array.
  treeBValues.forEach((value) => {
    // Check if value from tree B is in the hash table
    if (myHashTable.contains(value)) {
      // If it is, add it to the duplicates array
      duplicates.push(value);
    }
  });

  // Return the array of duplicates
  return duplicates;
};

// Export the function for use in other modules
module.exports = {
  treeIntersection,
};
