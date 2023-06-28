function breadthFirst(tree) {
  if (tree.root === null) {
    return [];
  }
  let result = [];
  let queue = [tree.root];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}


module.exports = { breadthFirst };
