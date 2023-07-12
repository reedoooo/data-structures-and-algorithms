class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }
}

function findKthFromEnd(head, k) {
  let p1 = head;
  let p2 = head;

  // Move p2 k positions ahead
  for (let i = 0; i < k; i++) {
    if (p2 === null) {
      throw new Error('k is larger than the linked list size');
    }
    p2 = p2.next;
  }

  // Move p1 and p2 simultaneously
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // Check if p1 is null before trying to return it
  if (p1 === null) {
    throw new Error('k is larger than the linked list size');
  } else {
    return p1;
  }
}

module.exports = { findKthFromEnd, Node, LinkedList };
