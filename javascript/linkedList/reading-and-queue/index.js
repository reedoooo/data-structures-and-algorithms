class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.top !== null) {
      node.next = this.top;
    }
    this.top = node;
  }

  pop() {
    if (this.top === null) {
      throw new Error("Cannot pop from an empty stack.");
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (this.top === null) {
      throw new Error("Cannot peek at an empty stack.");
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.rear !== null) {
      this.rear.next = node;
    }
    this.rear = node;
    if (this.front === null) {
      this.front = node;
    }
  }

  dequeue() {
    if (this.front === null) {
      throw new Error("Cannot dequeue from an empty queue.");
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return value;
  }

  peek() {
    if (this.front === null) {
      throw new Error("Cannot peek at an empty queue.");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Stack, Queue };
