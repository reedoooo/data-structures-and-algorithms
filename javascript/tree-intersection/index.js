const { HashMap } = require('../hashtable/index');

const treeIntersection = (treeA, treeB) => {
  if (!treeA.root || !treeB.root) {
    return [];
  }

  let treeAValues = treeA.preOrder(treeA.root);
  let treeBValues = treeB.preOrder(treeB.root);

  let myHashTable = new HashMap(1234);

  treeAValues.forEach((value) => {
    // Change here: allow null values to be set
    myHashTable.set(value, value);
  });

  let duplicates = [];

  treeBValues.forEach((value) => {
    // Change here: allow null values to be checked
    if (myHashTable.contains(value)) {
      duplicates.push(value);
    }
  });

  return duplicates;
};

module.exports = {
  treeIntersection,
};
