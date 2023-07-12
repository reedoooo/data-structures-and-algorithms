const { Stack, Queue } = require('../index.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test('pushes and pops elements correctly', () => {
    stack.push('test');
    expect(stack.pop().value).toEqual('test');
  });

  test('peeks at the top element', () => {
    stack.push('test');
    expect(stack.peek().value).toEqual('test');
  });

  test('checks if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push('test');
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueues and dequeues elements correctly', () => {
    queue.enqueue('test');
    expect(queue.dequeue().value).toEqual('test');
  });

  test('peeks at the front element', () => {
    queue.enqueue('test');
    expect(queue.peek().value).toEqual('test');
  });

  test('checks if queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('test');
    expect(queue.isEmpty()).toBe(false);
  });
});
