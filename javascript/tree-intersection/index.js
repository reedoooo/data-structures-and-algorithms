const { HashMap } = require('../hashtable/index');

const treeIntersection = (treeA, treeB) => {
  let treeAValues = treeA.preOrder(treeA.root);
  let treeBValues = treeB.preOrder(treeB.root);

  let myHashTable = new HashMap(1234);

  treeAValues.forEach((value) => {
    myHashTable.set(value, value);
  });

  let duplicates = [];

  treeBValues.forEach((value) => {
    if (myHashTable.contains(value)) {
      duplicates.push(value);
    }
  });

  return duplicates;
};

module.exports = {
  treeIntersection,
};
