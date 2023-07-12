// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(value) {
//     const node = new Node(value);
//     node.next = this.top;
//     this.top = node;
//   }

//   pop() {
//     const node = this.top;
//     if (node) {
//       this.top = node.next;
//     }
//     return node;
//   }

//   peek() {
//     return this.top;
//   }

//   isEmpty() {
//     return this.top === null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = this.rear = null;
//   }

//   enqueue(value) {
//     const node = new Node(value);
//     if (this.rear) {
//       this.rear.next = node;
//     }
//     this.rear = node;
//     if (!this.front) {
//       this.front = node;
//     }
//   }

//   dequeue() {
//     const node = this.front;
//     if (node) {
//       this.front = node.next;
//     }
//     if (!this.front) {
//       this.rear = null;
//     }
//     return node;
//   }

//   peek() {
//     return this.front;
//   }

//   isEmpty() {
//     return this.front === null;
//   }
// }

// module.exports = { Stack, Queue };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.front;
    this.front = removedNode.next;

    if (this.front === null) {
      this.back = null;
    }

    return removedNode;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.front;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedNode = this.top;
    this.top = poppedNode.next;

    return poppedNode;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top;
  }
}

module.exports = { Queue, Stack };
