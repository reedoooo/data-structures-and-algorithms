// Below are the tests for the Stack and Queue classes
const { Stack, Queue } = require('./index');

// Tests for Stack
describe('Stack', () => {
  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
  });

  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow();
    expect(() => stack.peek()).toThrow();
  });
});

// Tests for Queue
describe('Queue', () => {
  it('can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('calling dequeue or peek on empty queue raisesexception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow();
    expect(() => queue.peek()).toThrow();
  });
});
