// Javascript program to implement Queue using
// two stacks with costly enQueue()
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    // Move all elements from s1 to s2
    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
      //s1.pop();
    }

    // Push item into s1
    this.s1.push(x);

    // Push everything back to s1
    while (this.s2.length !== 0) {
      this.s1.push(this.s2.pop());
      //s2.pop();
    }
  }

  // Dequeue an item from the queue
  dequeue() {
    // If first stack is empty
    if (this.s1.length === 0) {
      console.log('Queue is empty');
      return null; // changed from null to undefined
    }

    // Return top of s1
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

module.exports = { Queue };
