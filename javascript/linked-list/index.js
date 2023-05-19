
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head !== null) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(`{ ${currentNode.value} }`);
      currentNode = currentNode.next;
    }
    values.push("NULL");
    return values.join(" -> ");
  }
}

export default LinkedList;
