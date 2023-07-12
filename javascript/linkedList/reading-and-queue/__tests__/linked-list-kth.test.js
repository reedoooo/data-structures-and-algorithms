const { Stack, Queue } = require('../index.js');

describe('Stack', () => {
  test('creates an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('pushes to the stack and peeks', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek().value).toBe(1);
  });

  test('pops from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop().value).toBe(2);
    expect(stack.peek().value).toBe(1);
  });
});

describe('Queue', () => {
  test('creates an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueues to the queue and peeks', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek().value).toBe(1);
  });

  test('dequeues from the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue().value).toBe(1);
    expect(queue.peek().value).toBe(2);
  });
});
