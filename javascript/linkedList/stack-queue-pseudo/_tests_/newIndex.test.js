const Queue = require('../newIndex'); // Assuming the Queue is exported from a file named Queue.js

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueues and dequeues items in FIFO order', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
  });

  test('returns undefined on dequeue when the queue is empty', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test('enqueues and dequeues items correctly after mixed operations', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue(); // removes 'a'
    queue.enqueue('c');

    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
  });

  test('maintains FIFO order after consecutive enqueue and dequeue operations', () => {
    queue.enqueue('a');
    queue.dequeue(); // removes 'a'
    queue.enqueue('b');
    queue.dequeue(); // removes 'b'
    queue.enqueue('c');

    expect(queue.dequeue()).toBe('c');
  });
});
