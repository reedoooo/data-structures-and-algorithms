const Queue = require('../index');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue(1);
  });

  it('should create a queue with a value', () => {
    expect(queue.front.value).toBe(1);
    expect(queue.back.value).toBe(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it('should enqueue a new value', () => {
    queue.enqueue(2);
    expect(queue.back.value).toBe(2);
  });

  it('should dequeue a value', () => {
    queue.enqueue(2);
    const dequeuedNode = queue.dequeue();
    expect(dequeuedNode.value).toBe(1);
    expect(queue.front.value).toBe(2);
  });

  it('should throw an error when dequeuing an empty queue', () => {
    queue.dequeue();
    expect(() => {
      queue.dequeue();
    }).toThrowError("Cannot dequeue empty queue");
  });

  it('should return the front value when peeking', () => {
    expect(queue.peek()).toBe(1);
  });

  it('should throw an error when peeking an empty queue', () => {
    queue.dequeue();
    expect(() => {
      queue.peek();
    }).toThrowError("Cannot peek empty queue");
  });

  it('should return true when checking if empty', () => {
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
