const { HashMap } = require("../hashtable/index");


const treeIntersection = (treeA, treeB) => {
  let treeAValues = treeA.preOrder(treeA.root);
  let treeBValues = treeB.preOrder(treeB.root);

  let myHashTable = new HashMap(1234);

  treeAValues.forEach(value => {
    myHashTable.set(value, value);
  });

  treeBValues.forEach(value => {
    myHashTable.set(value, value);
  });

  let duplicates = [];

  myHashTable.buckets.forEach(bucket => {
    if (bucket) {
      let currentNode = bucket.head.next;
      while (currentNode) {
        if (
          JSON.stringify(bucket.head.value) ===
          JSON.stringify(currentNode.value)
        ) {
          duplicates.push(Object.values(bucket.head.value)[0]);
          break;
        } else currentNode = currentNode.next;
      }
    }
  });

  return duplicates;
};

module.exports = {
  treeIntersection,
};
