# Code Challenge 01: Reverse-Arrays

<!-- Description of the challenge -->

Build a linked list

## Whiteboard Process

<!-- Embedded whiteboard image -->


## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Approach was to create a linked list

## Solution

<!-- Show how to run your code, and examples of it in action -->


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

