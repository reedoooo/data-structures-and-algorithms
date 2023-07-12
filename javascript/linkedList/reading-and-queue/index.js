class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    const node = this.top;
    if (node) {
      this.top = node.next;
    }
    return node;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.rear) {
      this.rear.next = node;
    }
    this.rear = node;
    if (!this.front) {
      this.front = node;
    }
  }

  dequeue() {
    const node = this.front;
    if (node) {
      this.front = node.next;
    }
    if (!this.front) {
      this.rear = null;
    }
    return node;
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Stack, Queue };
